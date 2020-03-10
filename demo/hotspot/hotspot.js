var Hotspot = pc.createScript('hotspot');

Hotspot.attributes.add("cameraEntity", {type: "entity", title: "Camera Entity"});
Hotspot.attributes.add("radius", {type: "number", default: 0.45, title: "Radius"});
Hotspot.attributes.add("opacity", {type: "number", title: "opacity"});
Hotspot.attributes.add("Dir", {type: "number", default: 1.0, title: "Dir"});
Hotspot.attributes.add("fadeDropOff", {
    type: "number", 
    default: 0.4, 
    title: "Fade Drop Off", 
    description: "When to start fading out hotspot relative to the camera direction. 1 for when hotspot is directly inline with the camera. 0 for never."
});


// initialize code called once per entity
Hotspot.prototype.initialize = function() {
    // Create a hit area using a bounding sphere
    this.hitArea = new pc.BoundingSphere(this.entity.getPosition(), this.radius);
    // More information about pc.ray: http://developer.playcanvas.com/en/api/pc.Ray.html
    this.ray = new pc.Ray();
    
   
    this.defaultForwardDirection = this.entity.forward.clone();
    this.directionToCamera = new pc.Vec3();
    this.sprite = this.entity.children[0];
    
    
    // Register the mouse down and touch start event so we know when the user has clicked
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.on('destroy', function() {
            this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        });
    }
    
    
    this.on('destroy', function() {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    });
    
    

    
};

// update code called every frame
Hotspot.prototype.update = function(dt) {
    var cameraPosition = this.cameraEntity.getPosition();
     
    // Always face the camera
    // this.entity.lookAt(cameraPosition);
    
    // Get the current direction to the camera
    this.directionToCamera.sub2(cameraPosition, this.entity.getPosition());
    this.directionToCamera.normalize();
     
    // Get the dot product of the direction to the camera and the original direction of the hotspot
    // which is relative to the angle between the two vectors
    // Start fading out the hotspot if the dot product is below fadeDropOff
    var dot =this.Dir * this.directionToCamera.dot(this.defaultForwardDirection);
    if (dot < 0) {
        if (this.sprite.enabled) {
            this.sprite.enabled = false;
        }
    } else {
        if (!this.sprite.enabled) {
            this.sprite.enabled = true;
        }
        
        var meshInstances = this.sprite.model.meshInstances; 
        var alpha = pc.math.clamp(dot / this.fadeDropOff, 0, this.opacity);
        for(var i = 0; i < meshInstances.length; ++i) {
            meshInstances[i].setParameter("material_opacity", alpha);
        }
    }
};

Hotspot.prototype.doRayCast = function (screenPosition) {
    // Only do the raycast if the sprite is showing
    if (this.sprite.enabled) { 
        // Initialise the ray and work out the direction of the ray from the a screen position
       
        this.cameraEntity.camera.screenToWorld(screenPosition.x, screenPosition.y, this.cameraEntity.camera.farClip, this.ray.direction); 
        this.ray.origin.copy(this.cameraEntity.getPosition());
        this.ray.direction.sub(this.ray.origin).normalize();

        // If the hotspot is clicked on, then send a event to start the 'pulse' effect
        if (this.hitArea.intersectsRay(this.ray)) {
            this.entity.fire("pulse:start");
        }    
        
        
    }
};

Hotspot.prototype.onMouseDown = function(event) {
    if (event.button == pc.MOUSEBUTTON_LEFT) {
        this.doRayCast(event);
    }
};

Hotspot.prototype.onTouchStart = function (event) {
    // On perform the raycast logic if the user has one finger on the screen
    if (event.touches.length == 1) {
        this.doRayCast(event.touches[0]);
        
        // Prevent the default mouse down event from triggering
        // https://www.w3.org/TR/touch-events/#h3_list-of-touchevent-types
        event.event.preventDefault();
    }    
};
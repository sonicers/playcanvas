var Billboard = pc.createScript('billboard');
Billboard.attributes.add("cameraEntity", {type: "entity", title: "Camera Entity"});

// initialize code called once per entity
Billboard.prototype.initialize = function() {
    this.camera = this.cameraEntity;
    // this.entity.model.meshInstances[0].layer = pc.LAYER_HUD;
};




// update code called every frame
Billboard.prototype.update = function(dt) {
    this.entity.setRotation(this.camera.getRotation());
    this.entity.rotateLocal(90, 0, 0);   
};

// swap method called for script hot-reloading
// inherit your script state here
Billboard.prototype.swap = function(old) {
    
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/
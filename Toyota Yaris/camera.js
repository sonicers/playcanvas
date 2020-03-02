pc.script.create('camera', function (context) {
    var Camera = function (entity) {
        this.entity = entity;
        this.target = null;
        this.initialEulers = new pc.Vec3();
        this.distFromTarget = 0;
    };

    Camera.prototype = {
        initialize: function () {
            // Disabling the context menu stops the browser displaying a menu when 
            // you right-click the page
            context.mouse.disableContextMenu();
     
            // Use the bind() method to attach event handlers. 
            // The mouse object supports events on move, button down and 
            // up, and scroll wheel.
            context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
        
            this.target = context.root.findByName('Target');

            this.initialEulers.copy(this.entity.getEulerAngles());
            
            var camToTarget = new pc.Vec3();
            camToTarget.sub2(this.target.getPosition(), this.entity.getPosition());
            this.distFromTarget = camToTarget.length();
        },

        onMouseMove: function (event) {
            // Here we are getting the resolution of the app's canvas
            var device = context.graphicsDevice;
            var width = parseFloat(device.canvas.clientWidth);
            var height = parseFloat(device.canvas.clientHeight);
 
            // Using the current position of the mouse from the event we calculate
            // the new position of the cube
            var x = -(event.x - (width/2)) / width;
            var y = (event.y - (height/2)) / height;
            
            this.entity.setPosition(this.target.getPosition());
            this.entity.setEulerAngles(this.initialEulers.x - y * 6, this.initialEulers.y + x * 14, this.initialEulers.z);
            this.entity.translateLocal(0, 0, this.distFromTarget);
        }
    };

   return Camera;
});
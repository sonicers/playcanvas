pc.script.create('rotate', function (context) {
    var Rotate = function (entity) {
        this.entity = entity;
    };

    Rotate.prototype = {
        update: function (dt) {
            this.entity.rotateLocal(0, 30 * dt, 0);
        }
    };

   return Rotate;
});
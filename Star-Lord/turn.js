pc.script.create('turn', function (context) {
    var Turn = function (entity) {
        this.entity = entity;
    };

    Turn.prototype = {
        update: function (dt) {
            this.entity.rotate(0, 30 * dt, 0);
        }
    };

    return Turn;
});
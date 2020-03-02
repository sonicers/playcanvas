var Augment = pc.createScript('augment');

Augment.attributes.add('text', { type: 'string', default: '' });
Augment.attributes.add('external', { type: 'boolean', default: false });
Augment.attributes.add('length', { type: 'number', default: 16 });

Augment.prototype.initialize = function () {
    var app = this.app;
    this.anim = app.root.findByName('device').script.animation;
    this.ar = app.root.getChildren()[0].script.augmented;
    this.camera = app.root.findByName('camera');
    this.alpha = -1.0;
};

Augment.prototype.update = function (dt) {
    switch (this.anim.state) {
        case 2:
            if (this.external) {
                this.alpha += (Math.min(1.0, this.entity.forward.dot(this.camera.forward) * 3) - this.alpha) * 0.1;
            } else {
                this.alpha += (-1 - this.alpha) * 0.1;
            }
            break;
        case 3:
            this.alpha += (1 - this.alpha) * 0.1;
            break;
        case 4:
        case 5:
            this.alpha += (-1 - this.alpha) * 0.1;
            break;
    }

    if (this.alpha > 0) {
        var point = this.camera.camera.worldToScreen(this.entity.getPosition());
        this.ar.draw(this.text, this.alpha, point.x, point.y, this.length);
    }
};
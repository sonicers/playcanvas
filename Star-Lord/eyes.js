pc.script.create('eyes', function (context) {
    var Eyes = function (entity) {
        this.entity = entity;
    };

    Eyes.prototype = {
        initialize: function () {
            this.material = this.entity.model.model.getMaterials()[0];
        },

        update: function (dt) {
            var intensity = .7 + Math.random() * .15 * Math.sin(Date.now() / 500) + Math.random() * .05;
            this.material.emissive.set(intensity, intensity, intensity, 1.0);
            
            this.material.emissiveUniform[0] = this.material.emissive.r;
            this.material.emissiveUniform[1] = this.material.emissive.g;
            this.material.emissiveUniform[2] = this.material.emissive.b;
            this.material.setParameter('material_emissive', this.material.emissiveUniform);
        }
    };

    return Eyes;
});
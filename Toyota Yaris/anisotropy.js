pc.script.create('anisotropy', function (context) {
    var Anisotropy = function (entity) {
        this.entity = entity;
    };

    Anisotropy.prototype = {
        initialize: function () {
            var model = this.entity.model.model;
            var meshInstances = model.meshInstances;
            for (var i = 0; i < meshInstances.length; i++) {
                var meshInstance = meshInstances[i];
                var material = meshInstance.material;
                if (material.diffuseMap) {
                    material.diffuseMap.maxAnisotropy = context.graphicsDevice.maxSupportedMaxAnisotropy;
                }
                if (material.normalMap) {
                    material.normalMap.maxAnisotropy = context.graphicsDevice.maxSupportedMaxAnisotropy;
                }
                if (material.specularMap) {
                    material.specularMap.maxAnisotropy = context.graphicsDevice.maxSupportedMaxAnisotropy;
                }
            }
        },
        
        update: function (dt) {
        }
    };

    return Anisotropy;
});
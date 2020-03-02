pc.script.create('materials', function (context) {
    var Materials = function (entity) {
        this.entity = entity;
    };

    Materials.prototype = {
        initialize: function () {
        },

        changeColor: function (color) {
            var model = this.entity.model.model;
            if (model) {
                var materials = model.getMaterials();
                for (var i = 0; i < materials.length; i++) {
                    var material = materials[i];
    
                    if (material.getName() === "body") {
                        material.ambient = color;
                        material.diffuse = color;
                        material.update();
                    }
                }
            }
        }
    };

    return Materials;
});
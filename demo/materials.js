var Materials = pc.createScript('materials');

Materials.prototype.changeColor = function(color){
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
};
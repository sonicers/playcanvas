pc.script.attribute('cubemap', 'string', 'forest');

pc.script.create('skybox', function (context) {
    var Skybox = function (entity) {
        this.entity = entity;
    };

    Skybox.prototype = {
        initialize: function () {
            this.lastCubemap = this.cubemap;
            if (this.cubemap) {
                this.setCubeMap(this.cubemap);
            }
        },
        
        update: function() {
            if (this.lastCubemap !== this.cubemap) {
                this.lastCubemap = this.cubemap;
                this.setCubeMap(this.cubemap);
            }
        },
        
        setCubeMap: function(name) {
            try {
                var cubeMaps = [ ];
                for(var m = 0; m < 6; m++) {
                    var sources = [ ];
        			for (var f = 0; f < 6; f++) {
        				sources[f] = context.assets.find(this.cubemap + '_m0' + m + '_c0' + f, pc.asset.ASSET_TEXTURE).resource.getSource();
        			}
                    cubeMaps[m] = new pc.gfx.Texture(context.graphicsDevice, {
                        cubemap: true,
                        rgbm: true,
                        fixCubemapSeams: true
                    });
        			cubeMaps[m].setSource(sources);
                }
                
                var helmet = context.root.findByName('model');
                var bust = context.root.findByName('bust');
                var materials = helmet.model.model.getMaterials();
                materials = materials.concat(bust.model.model.getMaterials());
                
                for(var i = 0; i < materials.length; i ++) {
                    materials[i].prefilteredCubeMap128 = cubeMaps[0];
                    materials[i].prefilteredCubeMap64 = cubeMaps[1];
                    materials[i].prefilteredCubeMap32 = cubeMaps[2];
                    materials[i].prefilteredCubeMap16 = cubeMaps[3];
                    materials[i].prefilteredCubeMap8 = cubeMaps[4];
                    materials[i].prefilteredCubeMap4 = cubeMaps[5];
                    materials[i].sphereMap = null;
                    materials[i].cubeMap = null;
                    materials[i].sphereMap = null;
                    materials[i].update();
                }

                context.scene.skybox = cubeMaps[0];
            } catch(ex) {
                console.log('couldn\'t set cubemap');
            }
        }
    };

    return Skybox;
});
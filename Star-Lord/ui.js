pc.script.attribute('environment', 'asset', [ ], { type: 'texture' });
pc.script.attribute('button_guardians', 'asset', [ ], { type: 'texture' });
pc.script.attribute('button_joachim', 'asset', [ ], { type: 'texture' });

pc.script.create('ui', function (context) {
    var Ui = function (entity) {
        this.entity = entity;
    };

    Ui.prototype = {
        initialize: function () {
            var i;
            var css = [
"body {",
"   -webkit-touch-callout: none;",
"   -webkit-user-select: none;",
"   -khtml-user-select: none;",
"   -moz-user-select: none;",
"   -ms-user-select: none;",
"   user-select: none;",
"   outline-style:none;",
"}",
"a {",
"    color: #fff;",
"}",
".ui-buttons {",
"    position: absolute;",
"    top: 0;",
"    right: 0;",
"    margin: 12px;",
"    display: flex;",
"    flex-wrap: wrap;",
"    flex-direction: row-reverse;",
"    width: 240px;",
"}",
".ui-button {",
"    width: 96px;",
"    height: 96px;",
"    display: block;",
"    margin: 12px;",
"    box-shadow: 0px 0px 8px rgba(0,0,0,.3);",
"    transform: scale(1, 1);",
"    border-radius: 64px;",
"    cursor: pointer;",
"    transition: box-shadow 200ms, transform 200ms;",
"    outline: 0 !important;",
"    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); !important",
"    -webkit-tap-highlight-color: transparent; !important",
"}",
".ui-button:hover {",
"    box-shadow: 0px 0px 12px rgba(0,0,0,.6);",
"    transform: scale(1.05, 1.05);",
"}",
".ui-button.active {",
"    box-shadow: 0px 0px 16px rgba(0,0,0,1);",
"    transform: scale(1.1, 1.1);",
"}",
"*:focus {",
"    outline: 0 !important;",
"    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); !important",
"    -webkit-tap-highlight-color: transparent; !important",
"}",
".author {",
"    position: absolute;",
"    left: 8px;",
"    bottom: 8px;",
"}",
".author > img, .website > img {",
"    display: block;",
"}",
".website {",
"    position: absolute;",
"    right: 8px;",
"    bottom: 8px;",
"}",
".music {",
"    position: absolute;",
"    top: 16px;",
"    left: 16px;",
"    width: 32px;",
"    height: 32px;",
"    cursor: pointer;",
"    transition: opacity 200ms;",
"}",
".music.off {",
"    opacity: 0.3;",
"}",
"@media screen and (max-width: 640px), screen and (max-height: 480px) {",
"    .ui-buttons {",
"        margin: 6px;",
"        width: 120px;",
"    }",
"    .ui-button {",
"        width: 48px;",
"        height: 48px;",
"        margin: 6px;",
"        border-radius: 24px;",
"    }",
"    .ui-element.author {",
"        left: 0;",
"        bottom: 0;",
"    }",
"    .ui-element.author > img {",
"        width: 128px;",
"    }",
"    .ui-element.website {",
"        right: 0;",
"        bottom: 0;",
"    }",
"    .ui-element.website > img {",
"        width: 128px;",
"    }",
"}",
            ].join('\n');

            var style = document.createElement('style');
            style.innerHTML = css;
            document.querySelector('head').appendChild(style);
            
            var self = this;

            // author link
            var img = context.assets.get(this.button_joachim[0]).resource._levels[0];
            var author = document.createElement('a');
            author.classList.add('author', 'ui-element');
            author.target = '_blank';
            author.href = 'http://joachimcoppens.com/';
            author.title = 'Joachim Coppens';
            author.appendChild(img);
            document.body.appendChild(author);
            
            author.addEventListener('touchstart', function(evt) {
                evt.stopPropagation();
            });
            
            // website link
            img = context.assets.get(this.button_guardians[0]).resource._levels[0];
            var website = document.createElement('a');
            website.classList.add('website', 'ui-element');
            website.target = '_blank';
            website.href = 'http://marvel.com/guardians';
            website.title = 'Guardians of the Galaxy';
            website.appendChild(img);
            document.body.appendChild(website);
            
            website.addEventListener('touchstart', function(evt) {
                evt.stopPropagation();
            });
            
            this.windowFocused = true;
            this.musicPlay = true;
            var pause = context.assets.find('audio', pc.asset.ASSET_TEXTURE).resource._levels[0];
            pause.classList.add('music', 'ui-element');
            pause.addEventListener('click', function() {
                this.classList.toggle('off');
                if (this.classList.contains('off')) {
                    self.musicPlay = false;
                } else {
                    self.musicPlay = true;
                }
            });
            pause.addEventListener('touchstart', function(evt) {
                evt.stopPropagation();
            });
            window.onfocus = function() {
                self.windowFocused = true;
            };
            window.onblur = function() {
                self.windowFocused = false;
            };
            
            window.addEventListener('click', function() {
                self.windowFocused = true;
            }, false);
            window.addEventListener('touchstart', function() {
                self.windowFocused = true;
                if (this.musicPlay) {
                    music.play();
                }
            }, false);
            
            document.addEventListener('visibilitychange', function(evt) {
                if (document.hidden === undefined) return;
                if (document.hidden) {
                    self.windowFocused = false;
                    music.volume = 0;
                    music.pause();
                } else {
                    self.windowFocused = true;
                }
            });
            document.body.appendChild(pause);
            
            // skyboxes switch
            if (this.environment) {
                var skybox = context.root.children[0].script.skybox;

                var buttons = document.createElement('div');
                buttons.classList.add('ui-buttons');
                document.body.appendChild(buttons);
                
                var setSkybox;

                for(i = 0; i < this.environment.length; i++) {
                    var asset = context.assets.get(this.environment[i]);
                    var button = asset.resource._levels[0];
                    button.classList.add('ui-button', 'ui-element');
                    
                    button.cubeMapName = asset.name.split('_')[1];
                    button.exposure = parseInt(asset.name.split('_')[2], 10);
                    if (button.cubeMapName === skybox.cubemap) {
                        setSkybox = button;
                        this.targetExposure = button.exposure;
                        button.classList.add('active');
                    }
                    
                    button.addEventListener('click', function(evt) {
                        if (setSkybox === this) return;
                        skybox.cubemap = this.cubeMapName;
                        self.targetExposure = this.exposure;
                        setSkybox.classList.remove('active');
                        this.classList.add('active');
                        setSkybox = this;
                        evt.preventDefault();
                        evt.stopPropagation();
                    });
                    
                    button.addEventListener('touchstart', function(evt) {
                        if (setSkybox === this) return;
                        skybox.cubemap = this.cubeMapName;
                        self.targetExposure = this.exposure;
                        setSkybox.classList.remove('active');
                        this.classList.add('active');
                        setSkybox = this;
                        evt.preventDefault();
                        evt.stopPropagation();
                    });
                    
                    buttons.appendChild(button);
                }
            }
            
            var stopMousePropagation = function(evt) {
                evt.preventDefault();
                evt.stopPropagation();
            };
            
            var elements = document.querySelectorAll('.ui-element');
            for (i = 0; i < elements.length; i++) {
                elements[i].addEventListener('mousedown', stopMousePropagation, false);
                elements[i].addEventListener('mouseup', stopMousePropagation, false);
            }
        },

        update: function (dt) {
            if (this.musicPlay && this.windowFocused && music.volume < 0.5) {
                if (music.paused) {
                    music.play();
                }
                music.volume += (0.5 - music.volume) * 0.1;
                if (music.volume > 0.49) {
                    music.volume = 0.5;
                }
            } else if ((! this.musicPlay || ! this.windowFocused) && music.volume > 0) {
                music.volume += (0 - music.volume) * 0.1;
                if (music.volume < 0.01) {
                    music.volume = 0;
                    music.pause();
                }
            }
            
            if (this.targetExposure !== context.scene.exposure) {
                context.scene.exposure += (this.targetExposure - context.scene.exposure) * 0.1;
                if (Math.abs(this.targetExposure - context.scene.exposure) < 0.1) {
                    context.scene.exposure = this.targetExposure;
                }
            }
        }
    };

    return Ui;
});
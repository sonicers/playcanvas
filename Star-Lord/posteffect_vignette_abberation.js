//--------------- POST EFFECT DEFINITION ------------------------//
pc.extend(pc.posteffect, function () {

    /**
     * @name pc.posteffect.Vignette
     * @class Implements the Vignette post processing effect.
     * @extends pc.posteffect.PostEffect
     * @param {pc.gfx.Device} graphicsDevice The graphics device of the application
     * @property {Number} offset Controls the offset of the effect.
     * @property {Number} darkness Controls the darkness of the effect.
     */
    var VignetteAberration = function (graphicsDevice) {
        // Shaders
        var attributes = {
            aPosition: pc.gfx.SEMANTIC_POSITION
        };

        var passThroughVert = [
            "attribute vec2 aPosition;",
            "",
            "varying vec2 vUv0;",
            "",
            "void main(void)",
            "{",
            "    gl_Position = vec4(aPosition, 0.0, 1.0);",
            "    vUv0 = (aPosition.xy + 1.0) * 0.5;",
            "}"
        ].join("\n");

        var luminosityFrag = [
            "precision " + graphicsDevice.precision + " float;",
            "",
            "uniform sampler2D uColorBuffer;",
            "uniform float uDarkness;",
            "uniform float uOffset;",
            "uniform float uAberration;",
            "",
            "varying vec2 vUv0;",
            "",
            "void main() {",
            "    vec2 uv = (vUv0 - vec2(0.5)) * vec2(uOffset);",
            "    float f = dot(uv, uv);",
            "    vec4 texelA = texture2D(uColorBuffer, vUv0 - (uv * f * uAberration / 100.0));",
            "    vec4 texelB = texture2D(uColorBuffer, vUv0 + (uv * f * uAberration / 100.0));",
            "    gl_FragColor = vec4(mix(vec3(texelA.r, texelB.gb), vec3(1.0 - uDarkness), f), texelA.a);",
            "}"
        ].join("\n");

        this.vignetteShader = new pc.gfx.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: luminosityFrag
        });

        this.offset = 1;
        this.darkness = 1;
    };

    VignetteAberration = pc.inherits(VignetteAberration, pc.posteffect.PostEffect);

    VignetteAberration.prototype = pc.extend(VignetteAberration, {
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            inputTarget.colorBuffer.minFilter = pc.gfx.FILTER_LINEAR;
            inputTarget.colorBuffer.magFilter = pc.gfx.FILTER_LINEAR;

            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);
            scope.resolve("uOffset").setValue(this.offset);
            scope.resolve("uDarkness").setValue(this.darkness);
            scope.resolve("uAberration").setValue(this.aberration);
            pc.posteffect.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.vignetteShader, rect);
        }
    });

    return {
        VignetteAberration: VignetteAberration
    };
}());

//--------------- SCRIPT ATTRIBUTES ------------------------//
pc.script.attribute('offset', 'number', 1, {
    min: 0,
    step: 0.05,
    decimalPrecision: 5,
    displayName: 'Offset'
});

pc.script.attribute('darkness', 'number', 1, {
    step: 0.05,
    decimalPrecision: 5,
    displayName: 'Darkness'
});

pc.script.attribute('aberration', 'number', 0.5, {
    step: 0.1,
    decimalPrecision: 5,
    displayName: 'Aberration'
});

//--------------- SCRIPT DEFINITION------------------------//
pc.script.create('vignetteaberration', function (context) {
    // Creates a new Vignette instance
    var VignetteAberration = function (entity) {
        this.entity = entity;
        this.effect = new pc.posteffect.VignetteAberration(context.graphicsDevice);
    };

    VignetteAberration.prototype = {
        initialize: function () {
            this.on('set', this.onAttributeChanged, this);
            this.effect.offset = this.offset;
            this.effect.darkness = this.darkness;
            this.effect.aberration = this.aberration;
        },

        onAttributeChanged: function (name, oldValue, newValue) {
            this.effect[name] = newValue;
        },

        onEnable: function () {
            this.entity.camera.postEffects.addEffect(this.effect);
        },

        onDisable: function () {
            this.entity.camera.postEffects.removeEffect(this.effect);
        }
    };

    return VignetteAberration;
});
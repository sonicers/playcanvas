var Fullscreen = pc.createScript('fullscreen');

Fullscreen.attributes.add('css', { type: 'asset', assetType: 'css', array: false });

Fullscreen.prototype.initialize = function () {
    // might not be supported
    if (! (document.body.requestFullscreen || document.body.msRequestFullscreen || document.body.mozRequestFullScreen || document.body.webkitRequestFullscreen)) {
        return;
    }

    var css = this.css.resource;
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    (document.head || document.getElementsByTagName('head')[0]).appendChild(style);

    var icon = this.icon = document.createElement('div');
    icon.id = 'fullscreen';
    document.body.appendChild(icon);

    icon.addEventListener('click', function() {
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.msRequestFullscreen) {
            document.body.msRequestFullscreen();
        } else if (document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
        }
    }, false);
};
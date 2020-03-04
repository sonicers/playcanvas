var PlatformCheck = pc.createScript('platformCheck');

function IsPC() {
         var userAgentInfo = navigator.userAgent;
         var Agents = ["Android", "iPhone",
                     "SymbianOS", "Windows Phone",
                     "iPad", "iPod"];
         var flag = true;
         for (var v = 0; v < Agents.length; v++) {
             if (userAgentInfo.indexOf(Agents[v]) > 0) {
                 flag = false;
                 break;
             }
         }
         return flag;
     }

// initialize code called once per entity
PlatformCheck.prototype.initialize = function() {
    
};

// update code called every frame
PlatformCheck.prototype.update = function(dt) {
 
};

// swap method called for script hot-reloading
// inherit your script state here
// PlatformCheck.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
var Door = pc.createScript('door');

Door.attributes.add('opened',{type:'boolean',default:false});

// initialize code called once per entity
Door.prototype.initialize = function() {
    if(IsPC()){
            //鼠标事件
        if(this.app.mouse){
            this.entity.element.on('mousedown',this.onPress,this);
        }
    }
    else{
         //触摸事件
        if(this.app.touch){
            this.entity.element.on(pc.EVENT_TOUCHSTART,this.onTouchStar,this);
        }   
    } 
};

// update code called every frame
Door.prototype.update = function(dt) {
    
};

//mouse
Door.prototype.onPress=function(event){
    this.opened = !this.opened;
    this.app.fire("BeginOpenDoor",this.opened);
};

Door.prototype.onRelease=function(event){
    //event.element.textureAsset = this.hoverAsset;
};


//touch
Door.prototype.onTouchStar=function(event){
    
    if(event.touches.length===1){
        this.opened = !this.opened;
        this.app.fire("BeginOpenDoor",this.opened);
    }
};

Door.prototype.onTouchEnd=function(event){
    if(event.touches.length===0){
        //event.element.textureAsset = this.hoverAsset;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// OpenSecondUi.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
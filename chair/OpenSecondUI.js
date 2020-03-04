var OpenSecondUi = pc.createScript('openSecondUi');

/*
OpenSecondUi.attributes.add('hoverAsset', {
    type:'asset',
    assetType:'texture'
});

OpenSecondUi.attributes.add('activeAsset', {
    type:'asset',
    assetType:'texture'
});*/


OpenSecondUi.attributes.add('SelectNum',{type:'number',default:0});

var m_Num=0;
// initialize code called once per entity
OpenSecondUi.prototype.initialize = function() {
    if(IsPC()){
            //鼠标事件
        if(this.app.mouse){
            this.entity.element.on('mousedown',this.onPress,this);
            //this.entity.element.on('mouseup',this.onRelease,this);
        }
    }
    else{
         //触摸事件
        if(this.app.touch){
            this.entity.element.on(pc.EVENT_TOUCHSTART,this.onTouchStar,this);
            //this.entity.element.on(pc.EVENT_TOUCHEND,this.onTouchEnd,this);
        }   
    } 
};

// update code called every frame
OpenSecondUi.prototype.update = function(dt) {
    
};

//mouse
OpenSecondUi.prototype.onPress=function(event){
    //event.element.textureAsset = this.activeAsset;
    if(this.SelectNum>0){
        m_Num=this.SelectNum;
        this.app.fire("OpenSecond",m_Num);
    }
};

OpenSecondUi.prototype.onRelease=function(event){
    //event.element.textureAsset = this.hoverAsset;
};


//touch
OpenSecondUi.prototype.onTouchStar=function(event){
    
    if(event.touches.length===1){
            //event.element.textureAsset = this.activeAsset;
            m_Num=this.SelectNum;
            this.app.fire("OpenSecond",m_Num);
    }
};

OpenSecondUi.prototype.onTouchEnd=function(event){
    if(event.touches.length===0){
        //event.element.textureAsset = this.hoverAsset;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// OpenSecondUi.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
var ChnageModelClick = pc.createScript('chnageModelClick');

ChnageModelClick.attributes.add('ModelNum',{type:'number',default:1});

//var m_ModelNum=0;
// initialize code called once per entity
ChnageModelClick.prototype.initialize = function() {
    if(IsPC()){
            //鼠标事件
        if(this.app.mouse){
            this.entity.element.on('mousedown',this.opPress,this);
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
ChnageModelClick.prototype.update = function(dt) {
    
};


ChnageModelClick.prototype.opPress=function(event){
    m_ModelNum=this.ModelNum;
    this.app.fire("BeginChangeModel",m_ModelNum);
};

ChnageModelClick.prototype.onRelease=function(event){
    
};



ChnageModelClick.prototype.onTouchStar=function(event){
    if(event.touches.length===1){
         m_ModelNum=this.ModelNum;
    this.app.fire("BeginChangeModel",m_ModelNum);
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// ChnageModelClick.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
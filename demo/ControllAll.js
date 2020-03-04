var ControllAll = pc.createScript('controllAll');

//替换模型
ControllAll.attributes.add('Wheel_01', {type: 'entity'});
ControllAll.attributes.add('Wheel_02', {type: 'entity'});

////////////////////////////////////////////////////////////////////////////////////
var CurrentWheelNum=1;//UIindex:当前模型按钮index
var ArrayModel;

// initialize code called once per entity
ControllAll.prototype.initialize = function() {
    ArrayModel=[this.Wheel_01,this.Wheel_02];
    
    //默认拿回第一个模型
    this.ChangeWheel(1);//默认模型1Up 1Down  
    
    //收到模型切换信号
    this.app.on('BeginChangeWheel',this.ChangeWheel,this);

};

//模型切换信号，拿到对应的模型
ControllAll.prototype.ChangeWheel=function(m_WheelNum){
    //切换模型
    CurrentWheelNum=m_WheelNum;
    console.log(m_WheelNum);
    for(i=0;i<ArrayModel.length;i++){
        if(i===m_WheelNum-1){
           ArrayModel[i].enabled=true;
        }
        else{
            ArrayModel[i].enabled=false; 
        }
    }
};
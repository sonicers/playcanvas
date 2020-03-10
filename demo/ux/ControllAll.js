var ControllAll = pc.createScript('controllAll');

//替换模型
ControllAll.attributes.add('Wheel_01', {type: 'entity'});
ControllAll.attributes.add('Wheel_02', {type: 'entity'});

//SkyBox
ControllAll.attributes.add('SkyBox_1',{type:'asset',assetType:'cubemap'});
ControllAll.attributes.add('SkyBox_2',{type:'asset',assetType:'cubemap'});
ControllAll.attributes.add('SkyBox_3',{type:'asset',assetType:'cubemap'});

////////////////////////////////////////////////////////////////////////////////////
var CurrentWheelNum=1;//UIindex:当前模型按钮index
var ArrayModel;
var SkyboxArray;

// initialize code called once per entity
ControllAll.prototype.initialize = function() {
    ArrayModel=[this.Wheel_01,this.Wheel_02];
    SkyboxArray=[this.SkyBox_1,this.SkyBox_2,this.SkyBox_3];
    
    //默认拿回第一个模型
    this.ChangeWheel(1);//默认模型1Up 1Down

    this.ChangeSkybox(1);//默认skybox
    
    //收到模型切换信号
    this.app.on('BeginChangeWheel',this.ChangeWheel,this);

    //收到开门信号
    this.app.on('BeginOpenDoor',this.OpenDoor,this);

    //收到替换Skybox信号
    this.app.on('BeginChangeHDR',this.ChangeSkybox,this);

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

//开门信号，拿到对应的模型
ControllAll.prototype.OpenDoor=function(){
    console.log("open door");
};

//SkyBox替换
ControllAll.prototype.ChangeSkybox=function(nums){

    var currentSkybox=SkyboxArray[nums-1];
    
    switch (nums){
        case 1:{
            this.CustomSkybox(currentSkybox,1.459,1.68,0);
        }break;
        case 2:{
            this.CustomSkybox(currentSkybox,2.136,1.57,0);
        }break;
        case 3:{
            this.CustomSkybox(currentSkybox,1.685,1.52,0);
        }break;
    }

};


ControllAll.prototype.CustomSkybox=function(m_currentSkybox,m_Intensity,m_exposure,m_tone){
    m_currentSkybox.loadFaces = true;
    
    this.app.scene.skyboxIntensity=m_Intensity;
    this.app.scene.exposure=m_exposure;
    //this.app.scene.toneMapping=m_tone;*/
    this.app.setSkybox(m_currentSkybox);
};
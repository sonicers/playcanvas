var ControllAll = pc.createScript('controllAll');

//替换模型
ControllAll.attributes.add('Model_1', {type: 'entity'});
ControllAll.attributes.add('Model_2', {type: 'entity'});

//旋转控制元素
ControllAll.attributes.add('UpEntity_A',{type:'entity'});
ControllAll.attributes.add('UpEntity_B',{type:'entity'});
ControllAll.attributes.add('DownEntity_A',{type:'entity'});
ControllAll.attributes.add('DownEntity_B',{type:'entity'});
ControllAll.attributes.add('RotateSpeed',{type:'number',default:10});

//要替换的材质
ControllAll.attributes.add('A_Up_ChangeMaterial_1', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('A_Up_ChangeMaterial_2', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('A_Up_ChangeMaterial_3', {type: 'asset', assetType: 'material'});
ControllAll.attributes.add('A_Down_ChangeMaterial_1', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('A_Down_ChangeMaterial_2', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('A_Down_ChangeMaterial_3', {type: 'asset',assetType: 'material'});
///////////////////
ControllAll.attributes.add('B_Up_ChangeMaterial_1', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('B_Up_ChangeMaterial_2', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('B_Up_ChangeMaterial_3', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('B_Down_ChangeMaterial_1', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('B_Down_ChangeMaterial_2', {type: 'asset',assetType: 'material'});
ControllAll.attributes.add('B_Down_ChangeMaterial_3', {type: 'asset',assetType: 'material'});

//颜色
ControllAll.attributes.add('Color_1',{type:'rgb'});
ControllAll.attributes.add('Color_2',{type:'rgb'});
ControllAll.attributes.add('Color_3',{type:'rgb'});
ControllAll.attributes.add('Color_4',{type:'rgb'});

//SkyBox
ControllAll.attributes.add('SkyBox_1',{type:'asset',assetType:'cubemap'});
ControllAll.attributes.add('SkyBox_2',{type:'asset',assetType:'cubemap'});
ControllAll.attributes.add('SkyBox_3',{type:'asset',assetType:'cubemap'});

////////////////////////////////////////////////////////////////////////////////////
var CurrentWheelNum=1;//UIindex:当前模型按钮index
var ArrayModel;

var Controll_nums=1;//UIindex:旋转按钮Index
var BeginRotate=false;//记录是否旋转信号
var BeginUpRotation = pc.Vec3.ZERO;//开始的模型Up Rotation
var BeginDownRotation=pc.Vec3.ZERO;
var A_CurrentUpRotation=pc.Vec3.ZERO;//记录Up模型Rotation
var A_CurrentDownRotation=pc.Vec3.ZERO;
var B_CurrentUpRotation=pc.Vec3.ZERO;
var B_CurrentDownRotation=pc.Vec3.ZERO;

var UpEntityArray;//Up模型数组
var DownEntityArray;
var CurrentUpModel;//记录当前Up模型
var CurrentDownModel;

var CurrentMaterialNum=1;//UIindex:材质按钮Index
var A_UpMaterialArray;//模型A上部分材质数组
var A_DownMaterialArray;
var B_UpMaterialArray;//模型B上部分材质数组
var B_DownMaterialArray;

var CurrentCollorNum=1;//UIindex:材质按钮Index
var CollorArray;//颜色数组

var SkyboxArray;
var CurrentSkyNum=1;
// initialize code called once per entity
ControllAll.prototype.initialize = function() {
    ArrayModel=[this.Model_1,this.Model_2];
    UpEntityArray=[this.UpEntity_A,this.UpEntity_B];
    DownEntityArray=[this.DownEntity_A,this.DownEntity_B];

    A_UpMaterialArray=[this.A_Up_ChangeMaterial_1,this.A_Up_ChangeMaterial_2,this.A_Up_ChangeMaterial_3];
    A_DownMaterialArray=[this.A_Down_ChangeMaterial_1,this.A_Down_ChangeMaterial_2,this.A_Down_ChangeMaterial_3];
    B_UpMaterialArray=[this.B_Up_ChangeMaterial_1,this.B_Up_ChangeMaterial_2,this.B_Up_ChangeMaterial_3];
    B_DownMaterialArray=[this.B_Down_ChangeMaterial_1,this.B_Down_ChangeMaterial_2,this.B_Down_ChangeMaterial_3];
    
    CollorArray=[this.Color_1,this.Color_2,this.Color_3,this.Color_4];
    
    SkyboxArray=[this.SkyBox_1,this.SkyBox_2,this.SkyBox_3];
    
    //默认拿回第一个模型
    this.ChangeModel(1);//默认模型1Up 1Down  
    
    this.ChangeSkybox(1);//默认skybox
    //收到模型切换信号
    this.app.on('BeginChangeModel',this.ChangeModel,this);
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //收到旋转信号
    //console.log("RotateEntity:"+this.RotateEntity);
    this.app.on('StarRotate',this.ContorlRotate,this);
    this.app.on('EndRotate',this.ContorlRotate,this);
    this.app.on('UseBeginRot',this.UseBeginRotation,this);
    this.app.on('UseCurrentRot',this.UseCurrentRotation,this);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
    
    //var meshInstances=this.entity.model.meshInstances;
    //var material_A= meshInstances[1].material;

    //this.ChangeMaterial(1);//默认使用1材质球
    //收到材质替换信号
    this.app.on('BeginChangeMaterial',this.ChangeMaterial,this);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
       
    //收到替换颜色信号
    this.app.on('BeginChangeColor',this.ChangeColor,this);
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

    //收到替换Skybox信号
    this.app.on('BeginChangeHDR',this.ChangeSkybox,this);
};

// update code called every frame
ControllAll.prototype.update = function(dt) {
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(BeginRotate){
        var CurrentDownEt_rotation=CurrentDownModel.getLocalEulerAngles();
        var CurrentUpEt_rotation=CurrentUpModel.getLocalEulerAngles();
        var rotateDownAngle = 0;
        var rotateUpAngle = 0;
        var downAnglePredict = 0;
        var upAnglePredict=0;

        //console.log("_______________________________________转起来");
        switch(Controll_nums){
            case 1:{
                //console.log("left");
                rotateUpAngle = dt*this.RotateSpeed;
            }break;
            case 2:{
                //console.log("right");
                rotateUpAngle = -dt*this.RotateSpeed;
            }break;
            case 3:{
                rotateDownAngle = -dt*this.RotateSpeed/3; 
            }break;             
            case 4:{
                rotateDownAngle = dt*this.RotateSpeed/3;
            } break;    
        }
        
        downAnglePredict = CurrentDownEt_rotation.z + rotateDownAngle;//预先存下下一帧的角度     
        upAnglePredict=CurrentUpEt_rotation.z+rotateUpAngle;
        
        if(downAnglePredict>-3 && downAnglePredict < 7){
            CurrentDownModel.rotateLocal(0,0,rotateDownAngle);
        }
        if(upAnglePredict>-30&&upAnglePredict<10){ 
            CurrentUpModel.rotateLocal(0,0,rotateUpAngle);
        }
        //console.log('up:'+CurrentUpEt_rotation,'down:'+CurrentDownEt_rotation);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////
        //根据模型不同，记录当前的rotation不同
        if(CurrentWheelNum===1){
            A_CurrentUpRotation=CurrentUpEt_rotation;//记录当前A模型UpRotation
            A_CurrentDownRotation=CurrentDownEt_rotation;//记录当前A模型DownRotation
        }
        if(CurrentWheelNum===2){
            B_CurrentUpRotation=CurrentUpEt_rotation;//记录当前B模型UpRotation
            B_CurrentDownRotation=CurrentDownEt_rotation;//记录当前B模型DownRotation
        }
        
    }
};

//启动旋转信号
ControllAll.prototype.ContorlRotate=function(isRotate,m_RotateNum)
{
    BeginRotate=isRotate;
    Controll_nums=m_RotateNum;
    console.log("转？"+isRotate);
};

//EndUI和BackControllUI相机Rotation的复位
ControllAll.prototype.UseBeginRotation=function(){
    CurrentUpModel.setLocalEulerAngles(BeginUpRotation);
    CurrentDownModel.setLocalEulerAngles(BeginDownRotation);
};

ControllAll.prototype.UseCurrentRotation=function(){
    if(CurrentWheelNum===1){
        CurrentUpModel.setLocalEulerAngles(A_CurrentUpRotation);
        CurrentDownModel.setLocalEulerAngles(A_CurrentDownRotation);
    }
    if(CurrentWheelNum===2){
        CurrentUpModel.setLocalEulerAngles(B_CurrentUpRotation);
        CurrentDownModel.setLocalEulerAngles(B_CurrentDownRotation);
    }
};

//模型切换信号，拿到对应的模型
ControllAll.prototype.ChangeModel=function(m_ModelNum){
    //切换模型
    CurrentWheelNum=m_ModelNum;
    console.log(m_ModelNum);
    for(i=0;i<ArrayModel.length;i++){
        if(i===m_ModelNum-1){
           ArrayModel[i].enabled=true;
            
       //获取当前上下模型
            CurrentUpModel=UpEntityArray[i];
            CurrentDownModel=DownEntityArray[i];
            console.log("CurrentUpModel:"+CurrentUpModel);
            console.log("CurrentDownModel:"+CurrentDownModel);
            
        //切换模型后腰更新上次选择的材质与颜色
            this.ChangeMaterial(CurrentMaterialNum);
        }
        else{
            ArrayModel[i].enabled=false; 
        }
    }
};

//材质替换
ControllAll.prototype.ChangeMaterial=function(nums){
    console.log("替换材质啦！！！！！！！！！！！！！！！！！！！！！！！！！");
    CurrentMaterialNum=nums;
    if(CurrentWheelNum===1){
        CurrentUpModel.model.meshInstances[1].material=A_UpMaterialArray[nums-1].resource;
        CurrentDownModel.model.meshInstances[1].material=A_DownMaterialArray[nums-1].resource;
    }
    else if(CurrentWheelNum===2){
        CurrentUpModel.model.meshInstances[1].material=B_UpMaterialArray[nums-1].resource;
        CurrentDownModel.model.meshInstances[1].material=B_DownMaterialArray[nums-1].resource;
    }
    
    //如果颜色改变了，材质的颜色也要改变
    this.ChangeColor(CurrentCollorNum);
    this.ChangeSkybox(CurrentSkyNum);
};

//颜色替换
ControllAll.prototype.ChangeColor=function(nums){
    CurrentCollorNum=nums;
    console.log("替换颜色啦！！！！！！！！！！！！！！！！！！！！！！！！！");
    var Up_meshInstances=CurrentUpModel.model.meshInstances;
    var Down_meshInstances=CurrentDownModel.model.meshInstances;
    var material_Up= Up_meshInstances[1].material;
    var material_Down= Down_meshInstances[1].material;
    var currentColor=CollorArray[nums-1];

    material_Up.diffuse=currentColor;
    material_Down.diffuse=currentColor; 
    material_Up.update();
    material_Down.update();
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

// swap method called for script hot-reloading
// inherit your script state here
ControllAll.prototype.swap = function(old) { 
    // old.app.off('BeginChangeHDR');
    // this.app.on('BeginChangeHDR',this.ChangeSkybox,this);
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
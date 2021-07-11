var statusBlender="off";
var blender = document.getElementById("blender");
var soundBlender=document.getElementById("blenderSound");
var soundButton=document.getElementById("buttonSound");


function controlBlender(){
    if(statusBlender=="off"){
        statusBlender= "On";
        soundBlenderOn();
        blender.classList.add("active");

        
    }else{
        statusBlender="off";
        blender.classList.remove("active");
        soundBlenderOn();
    };
}

function soundBlenderOn(){
    if(soundBlender.paused){
        soundButton.play();
        soundBlender.play();
    }else{
        soundButton.play();
        soundBlender.pause();
        soundBlender.currentTime = 0;

    }

}
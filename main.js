video = "";
status1 = "";

function preload(){
}

function setup(){
   canvas = createCanvas(460, 380);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide()
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
}

function draw(){
    image(video, 0, 0, 460, 380);
}
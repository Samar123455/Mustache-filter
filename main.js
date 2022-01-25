nose_x = 0;
nose_y = 0;


function preload(){
   muchatche = loadImage("https://i.postimg.cc/RV0KZCKZ/muchatche.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);;
    video.hide();

    PoseNet = ml5.poseNet(video , modelloaded);
    PoseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x =   results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

function modelloaded(){
    console.log("PoseNet is working  :)");
}

function draw(){
 image(video,0,0,300,300);
 image(muchatche,nose_x-25,nose_y-10,50,50);
}

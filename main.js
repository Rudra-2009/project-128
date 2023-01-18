song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup() {
    canvas=createCanvas(600,500)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function preLoad() {
    song1 = loadSound("DEAF KEV - Invincible [NCS Release].mp3");
    song2 = loadSound("Disfigure - Blank [NCS Release].mp3");
}
function draw() {
    image(video,0,0,600,500);
}
function modelLoaded() {
    console.log("PoseNet is initialised");
}
function gotPoses(results) {
    if(results.length>0) {
       console.log(results);
       leftWristX=results[0].pose.leftWrist.x;
       leftWristY=results[0].pose.leftWrist.Y;
       console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

       rightWristX=results[0].pose.rightWrist.x;
       rightWristY=results[0].pose.rightWrist.y;
       console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);

       scoreLeftWrist=results[0].pose.keypoints[9].score;
       console.log("scoreLeftWrist= "+scoreLeftWrist);
    }
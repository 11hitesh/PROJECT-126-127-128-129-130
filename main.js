music="";
music2="";
leftWristX="0";
leftWristY="0";
rightWristX="0";
rightWristY="0";
function preload()
{
    music=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}

function setup()
{
    video=createCapture(VIDEO);
    video.hide();
canvas=createCanvas(600,500);
canvas.center();

poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function draw()
{
    image(video,0,0,600,500);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}


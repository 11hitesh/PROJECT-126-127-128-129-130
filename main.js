music = "";
music2 = "";
leftWristX = "0";
leftWristY = "0";
rightWristX = "0";
rightWristY = "0";
scoreLeftWrist = "0";
music_status = "";

function preload() {
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup() {
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(600, 500);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
    music_status = music.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        music.stop();

        if (song_status == false) {
            music2.play();
            document.getElementById("song").innerHTML = "playing-pica pica picachusong";
        }

    }
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        cosole.log("scoreLeftWrist=" + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}
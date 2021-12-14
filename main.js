music="";
music2="";

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
}

function draw()
{
    image(video,0,0,600,500);
}

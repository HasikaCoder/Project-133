function preload()
{
    img=loadImage('Bedroom.jpg');
}



function setup() {
    canvas = createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    vide.hide();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }


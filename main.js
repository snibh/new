function preload()
{

}
function setup() {

Canvas = createCanvas(640,480);
video = createCapture(VIDEO);
video.hide();
Canvas.position(110,215);
rect(110,215,1000,1000);


}
function take_snapshot(){

save("myselfie.png");  

}
function draw() {

image(video,0,0,640,480);


}
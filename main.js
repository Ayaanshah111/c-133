img="";
status="";
object=[];
function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
od=ml5.objectDetector('cocossd',modelLoaded);
}
function draw(){
image(img,0,0,640,420);
if(status!=""){
for(i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="status:object-detected";
   fill("orange");
noFill();
stroke("purple");
percent=floor(object[i].confidence*100);
text(object[i].label+"  "+percent+"%",object[i].x+15,object[i].y+15);
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}
function modelLoaded(){
    console.log('modelLoaded');
    status=true;
    od.detect(img,gotresult);
}
function gotresult(error,results){
if(error){
    console.log(error);
}
console.log(results);
object=results;

}
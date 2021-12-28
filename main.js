Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function captureimg(){
    Webcam.snap(function(img_location){
        document.getElementById("result").innerHTML="<img id='image_output' src='"+img_location+"'>";
    })
}
console.log("ml5 version"+ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RJvJ_eaP1/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
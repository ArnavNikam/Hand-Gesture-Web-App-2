Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='pic' src="+data_uri+"></img>";
    })
}

console.log("ml5 version "+ml5.version)

claffier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5C7DOa4lU/model.json",modelloaded)

function modelloaded(){
    console.log("modelloaded")
}

function speak(){
    var api= window.speechSynthesis;

    data1="the first prediction is"+prediction1;

    data2="the second prediction is"+prediction2;

    tectospeech=new SpeechSynthesisUtterance(data1+data2);

    api.speak(tectospeech);
}
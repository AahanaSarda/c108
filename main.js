prediction1 = "";
prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_img" src="' + data_uri + '"/>';

    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SIl2LJv-Z/model.json', modelloaded);

function modelloaded(){
    console.log("modelloaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The First Prediction Is "+prediction1;
    speak_data_2="And The Second Prediction Is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}
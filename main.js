var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("TextBox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event)

    Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("TextBox").innerHTML = Content;
    speak();
}

function speak(){
    var snyth = window.speechSynthesis;

    speak_data = document.getElementById("TextBox").value;

    Utter_this = new SpeechSynthesisUtterance(speak_data);

    snyth.speak(Utter_this);
    Webcam.attach(box);
    Webcam.remove(box)
}

box = document.getElementById("box");

Webcam.set({
width: 360,
height: 360,
image_format: "jpg",
jpg_quality: 90
});
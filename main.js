x = 0;
y = 0;

draw_apple = "";
apple = "";

speak_data = "";

to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  apple = loadImage('apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 to_number = Number(content);
 if(Number.isInteger(to_number))
 {
    document.getElementById("status").innerHTML = "started drawing apple";
    draw_apple = "set";
 }

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() 
{
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;

    createCanvas(screen_width, screen_Height-150);
    canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

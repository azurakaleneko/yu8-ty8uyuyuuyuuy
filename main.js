x=0;
y=0;

draw_circle="";
draw_rect="";
draw_melanie=""

var img;
function preload(){
    img=loadImage("melanie-PhotoRoom.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML= "если ты ненавидишь меня умри"
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML= "если ты ненавидишь меня умри:"+ content;



    if(content=="círculo")
    {

        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Астры из фоамирана Цветы из фоамирана Своими руками ";
        draw_circle="set";

    }

    if(content=="Melany")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Астры из фоамирана Цветы из фоамирана Своими руками ";
        draw_melanie="set";
    }

    if(content=="rectángulo")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Астры из фоамирана Цветы из фоамирана Своими руками ";
        draw_rect="set";
    }

}

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML= "fyhfvhtggtgb";
        draw_circle="";
    }

    if(draw_melanie == "set")
    {
        image(img,x,  y, 70,70);
        document.getElementById("status").innerHTML= "fyhfvhtggtgb";
        draw_melanie="";
    }

    if(draw_rect == "set")
    {
        rect(x, y, 70,50);
        document.getElementById("status").innerHTML= "fyhfvhtggtgb";
        draw_rect="";
    }
}
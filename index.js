
function again(){
    var randomNumber1= Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomNumber1 + ".png";
var image1= document.querySelectorAll("img")[0].setAttribute("src",randomimage);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomNumber2 + ".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src",randomimage);

// if else conditon 
if(randomNumber1>randomNumber2){
    document.getElementsByTagName('h1')[0].innerHTML="player 1 wins 🚩 ";
}
else if(randomNumber2>randomNumber1){
    document.getElementsByTagName('h1')[0].innerHTML="player 2 wins 🚩";
}
else{
    document.getElementsByTagName('h1')[0].innerHTML="draw 🤝";
}
}

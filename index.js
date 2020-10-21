var title = document.querySelector("h1");
var img1 = document.getElementsByTagName("img")[0];
var img2 = document.getElementsByTagName("img")[1];
function diceRoll(){
    var rand1 = Math.floor(Math.random() * 6) + 1;
    var rand2 = Math.floor(Math.random() * 6) + 1;
    img1.setAttribute("src", "images/dice"+ rand1 +".png");
    img2.setAttribute("src", "images/dice"+ rand2 +".png");
    if(rand1 > rand2){
       document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }else if(rand1 === rand2){
        document.querySelector("h1").innerHTML = "Draw!";
    }else{
        document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
    }
}
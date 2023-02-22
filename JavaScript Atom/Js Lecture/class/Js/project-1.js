var player1 = Math.floor(Math.random()*6)+1;
var dice1 = "images/dice"+player1+".png";
var img1 = document.querySelector(".player-1");
img1.setAttribute("src",dice1);

var player2 = Math.floor(Math.random()*6)+1;
var dice2 = "images/dice"+player2+".png";
var img2 = document.querySelector(".player-2");
img2.setAttribute("src",dice2);

if(player1 > player2){
  document.querySelector("h1").innerHTML="⛳ Player 1 Win";
}
if(player1 < player2){
  document.querySelector("h1").innerHTML="⛳ Player 2 Win";
}
if(player1==player2){
  document.querySelector("h1").innerHTML="🤝Match Draw";
}

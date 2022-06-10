
function generateNumber(){
  var number = Math.floor(Math.random() * 6) + 1;
  return number;
}

function winner(player1, player2){
  if(player1 > player2){
    document.querySelector("h1").textContent = "🚩Player1 wins!";
  }
  else if(player2 > player1){
    document.querySelector("h1").textContent = "Player2 wins!🚩";
  }
  else{
    document.querySelector("h1").textContent = "Draw!";
  }
}

var randomNumber1 = generateNumber();
var randomNumber2 = generateNumber();

var randomImageSource1 = "images/dice"+randomNumber1+".png";
var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);

winner(randomNumber1,randomNumber2);

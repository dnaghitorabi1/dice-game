let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDieFile1 = "dice" + randomNumber1 + ".png";
let randomDieFile2 = "dice" + randomNumber2 + ".png";

document.getElementById("leftImage").setAttribute("src", "images/" + randomDieFile1);
document.getElementById("rightImage").setAttribute("src", "images/" + randomDieFile2);

if (randomNumber1 > randomNumber2) {
  document.getElementById("title").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.getElementById("title").innerHTML = "Player 2 Wins!";
} else {
  document.getElementById("title").innerHTML = "Draw!";
}

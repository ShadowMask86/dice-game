let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let i = randomNumber1;
let j = randomNumber2

// console.log(randomNumber1);

let dice1 = document.querySelector(".img1").setAttribute("src", "/Dicee+Challenge+-+Starting+Files/images/dice" + i + ".png");

let dice2 = document.querySelector(".img2").setAttribute("src", "/Dicee+Challenge+-+Starting+Files/images/dice" + j + ".png");

if(i > j){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}else if(j > i){
    document.querySelector("h1").innerHTML = "🏆 Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "🎲Draw !🎲";
}
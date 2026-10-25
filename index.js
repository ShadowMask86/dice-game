let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const result = document.querySelector("h1");

dice1.src = `./images/dice${randomNumber1}.png`;
dice2.src = `./images/dice${randomNumber2}.png`;

if(randomNumber1 > randomNumber2){
    result.textContent = "🏆 Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    result.textContent = "🏆 Player 2 Wins!";
}else{
    result.textContent = "🎲Draw !🎲";
}
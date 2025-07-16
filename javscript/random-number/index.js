const dice1 = document.getElementById("label1")
const dice2 = document.getElementById("label2")
const dice3 = document.getElementById("label3")
const random = document.getElementById("random")
let randomNum1;
let randomNum2;
let randomNum3;
let min = 1;
let max = 6;

random.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max )+ min;
    randomNum2 = Math.floor(Math.random() * max )+ min;
    randomNum3 = Math.floor(Math.random() * max )+ min;
    dice1.textContent = randomNum1;
    dice2.textContent = randomNum2;
    dice3.textContent = randomNum3;
}

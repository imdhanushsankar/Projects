const MinNum = 1;
const Maxum = 100;
const randomNum = Math.floor(Math.random() * (Maxum - MinNum + 1))+ MinNum;

let running = true;
let guess = document.getElementById("Number");
const submit = document.getElementById("answer");
let attempt = 0;





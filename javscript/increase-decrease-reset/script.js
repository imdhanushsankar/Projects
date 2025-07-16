
const decreaseBtn = document.getElementById("decreaseBtn")

const increaseBtn = document.getElementById("increaseBtn")

const resetBtn = document.getElementById("resetBtn")

const numberCount = document.getElementById("numberCount")

let count = 0;


decreaseBtn.onclick = function(){
    count--;
    numberCount.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    numberCount.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    numberCount.textContent = count;
}

const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelius = document.getElementById("toCelius");
const result = document.getElementById("result"); 
let temp;


function convert(){
    if (toFarenheit.checked){
       temp = Number(textBox.value);
       temp = temp * 9/ 5 + 32; 
       result.textContent = temp.toFixed(1) + "°F"

    }
    else if (toCelius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9) ; 
        result.textContent = temp.toFixed(1)  + "°C"
        

    }
    else{
        result.textContent = "select the unit"
    }
  

}
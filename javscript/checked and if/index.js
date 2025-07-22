const myAge = document.getElementById("age");
const myVisa = document.getElementById("visa");
const myPaypal = document.getElementById("paypal");
const myUpi = document.getElementById("upi");
const mySubmitbtn = document.getElementById("submitbtn");
const output = document.getElementById("output");
const outputCard = document.getElementById("outputcard");

mySubmitbtn.onclick = function (){
    if(myAge.checked){
        output.textContent ="you're subscribed";
    }
    else{
        output.textContent ="you're  not subscribed";
    }

    if (myVisa.checked){
        outputCard.textContent ="you choosed visa method payment";
    }
     else if (myPaypal.checked){
        outputCard.textContent ="you choosed paypal method payment";
    }
    else if (myUpi.checked){
        outputCard.textContent ="you choosed upi method payment";
    }
    else{
        outputCard.textContent = "choose the payment to continue :";
    }

}
const inputMoney = document.getElementById("bill-number");
const peopleInput = document.querySelector("#people-input");
const buttonTip = document.getElementById("button-tip");
const amountTip = document.querySelector(".amount-tip");
const amountTotal = document.querySelector(".amount-total");
const tipsButton = document.querySelectorAll(".button");
const custom = document.querySelector("#button-tip");
const resetButton = document.querySelector(".reset-button");
const errorNumber=document.querySelector(".zero");


inputMoney.addEventListener("input" , billInputFun);
peopleInput.addEventListener("input" , peopleInputFun);
tipsButton.forEach(function(val){
    val.addEventListener("click", handleClick);
});
custom.addEventListener("input", tipInputFan);
resetButton.addEventListener("click", resetAll);



inputMoney.value = "0.0";
peopleInput.value = "1";
amountTip.innerHTML = "$" + (0.0).toFixed(2);
amountTotal.innerHTML = "$" + (0.0).toFixed(2);


let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;


function billInputFun(){
    billValue = parseFloat(inputMoney.value);
    calculateTip();
}

function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value);
    
       if(peopleValue < 1){
        errorNumber.style.display = "flex"
        peopleInput.style.border = "thick solid red";
       }else{ 
        errorNumber.style.display = "none"
        peopleInput.style.border = "none"
       }
       calculateTip();
 }


function tipInputFan(){
    tipValue = parseFloat(custom.value / 100);

    tipsButton.forEach(function(val){
        val.classList.remove("activ-tip");
    })
    calculateTip();
}


function handleClick(event){
    tipsButton.forEach (function(val) {
        val.classList.remove("tip-15");
      if(event.target.innerHTML == val.innerHTML){
        val.classList.add("tip-15");
        tipValue= parseFloat(val.innerHTML) / 100;
      }
    });
    calculateTip();
}


function calculateTip(){
    if(peopleValue >= 1 && billValue >= 0){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        amountTip.innerHTML = "$" + tipAmount.toFixed(2);
        amountTotal.innerHTML = "$" + total.toFixed(2);
    }
}


function resetAll( resetButton){
    inputMoney.value = "0.0";
    billInputFun()
    peopleInput.value = "1";
    peopleInputFun()
}

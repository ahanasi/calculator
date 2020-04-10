const display =  document.getElementById("display"); 
const numButtons = document.querySelectorAll('.number');

let selectedNum = [];


numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
         selectedNum.push(event.target.textContent);
         populateDisplay();
    });
    
});

document.addEventListener('DOMContentLoaded', (event) => {
    display.value = "";
});

function populateDisplay(){
    display.value = selectedNum.join("");
    display.textContent = selectedNum.join("");
}

function clearValues(){
    display.value = "";
    display.textContent = "";
}






function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(op,num1,num2){
   return (op == "+") ? add(num1,num2) 
        : (op == "-") ? subtract(num1,num2)
        : (op == "*") ? multiply(num1,num2)
        : divide(num1,num2); 
}
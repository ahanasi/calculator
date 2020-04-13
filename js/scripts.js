const display =  document.querySelector("#display"); 
const numButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector("#clearBtn");
const operators = document.querySelectorAll(".operator");
const eql = document.querySelector("#equals");
const calculator = {
    displayValue: '0',
    firstOp: null,
    isSecondOp: false,
    operator: null,
}





numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
         displayValue.push(event.target.textContent);
         populateDisplay();
    });   
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        
    });
    
});



clearButton.addEventListener('click', clearValues);

eql.addEventListener('click', (opt,a,b) => {
    calculateResult(opt,a,b);
    populateDisplay();
});

document.addEventListener('DOMContentLoaded', (event) => {
    display.value = "0";
});

function populateDisplay(){
    display.value = displayValue.join("");
    display.textContent = displayValue.join("");
}

function clearValues(){
   
}

function add(a,b){
    return Number(a)+Number(b);
}

function subtract(a,b){
    return Number(a)-Number(b);
}

function multiply(a,b){
    return Number(a)*Number(b);
}

function divide(a,b){
    return Number(a)/Number(b);
}

function operate(op,num1,num2){
   return (op == "+") ? add(num1,num2) 
        : (op == "−") ? subtract(num1,num2)
        : (op == "×") ? multiply(num1,num2)
        : divide(num1,num2); 
}
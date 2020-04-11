const display =  document.querySelector("#display"); 
const numButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector("#clearBtn");
const operators = document.querySelectorAll(".operator");
const eql = document.querySelector("#equals");

let displayValue = [];
let num1;
let num2;
let isNum2 = false; 
let currentOp;
let result;



numButtons.forEach(button => {
    button.addEventListener('click', (e) => {

         displayValue.push(event.target.textContent);
         populateDisplay();

         if(isNum2){
             num2 = displayValue.join("");
         }
    });   
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        isNum2 = !isNum2;
        currentOp = e.target.textContent;
        num1 = displayValue.join("");
        displayValue = [];
    });
    
});



clearButton.addEventListener('click', clearValues);
eql.addEventListener('click', (opt,a,b) => {
    num2 = displayValue.join("");
    b = num2;
    a = num1;
    opt = currentOp;
    displayValue = [operate(opt,a,b)];
    populateDisplay();



    

});

document.addEventListener('DOMContentLoaded', (event) => {
    display.value = "";
});

function populateDisplay(){
    display.value = displayValue.join("");
    display.textContent = displayValue.join("");
}

function clearValues(){
    display.value = "";
    display.textContent = "";
    displayValue = [];
    currentOp = "";
    num1 = 0;
    num2 = 0;
    isNum2 = false;
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
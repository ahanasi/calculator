const display =  document.querySelector("#display");
const keys = document.querySelector(".calc-keys");
const calculator = {
    displayValue: '0',
    firstOp: null,
    isSecondOp: false,
    operator: null,
}

keys.addEventListener('click', (e) => {

    const {target} = e;

    if(!target.matches('button')){
        return;
    }

    if(target.matches('.number')){
        numInput(target.textContent);
        populateDisplay();
    }

    if(target.matches('.operator')){
        operatorFunction(target.textContent);
        
    }

    if(target.matches('#clearBtn')){
        clearCalc();
        populateDisplay();
    }

});

function clearCalc(){
    calculator.displayValue = '0';
    calculator.firstOp = null;
    calculator.isSecondOp = false;
    calculator.operator = null;
}

function operatorFunction(target){

    const inputVal = calculator.displayValue;
    
    if (calculator.operator && calculator.isSecondOp){
        calculator.operator = target;
        return;
    }

    if(calculator.firstOp === null){
        calculator.firstOp = parseFloat(inputVal);
    } else if (calculator.operator){
        const result = operate(calculator.operator, calculator.firstOp, inputVal);
        calculator.firstOp = result;
        calculator.displayValue = result;
        populateDisplay();
    } 

    calculator.isSecondOp = !calculator.isSecondOp;
    calculator.operator = target;           
    return;
}


function numInput(num){
    if (calculator.isSecondOp){
        calculator.displayValue = '0';
        calculator.isSecondOp = !calculator.isSecondOp;
    }
    calculator.displayValue = (calculator.displayValue === '0') ? num : calculator.displayValue + num;
}


function populateDisplay(){
    display.value = calculator.displayValue;
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
        : (op == "÷") ? divide(num1,num2)
        : num2;
}
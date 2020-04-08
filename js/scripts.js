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
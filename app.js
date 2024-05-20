let firstNum;
let secondNum;
let operator;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

const btnContainer = document.querySelector(".btn-container");
const display = document.querySelector(".display");
const btnClear = document.querySelector(".btn-clear")

let displayContent = "";


btnContainer.addEventListener("click",(evt)=>{
    if(evt.target == btnContainer ){
        displayContent +="";
    }else{
        displayContent += ` ${evt.target.textContent}`;
    }

    if (evt.target.textContent == "AC") displayContent = "";

    display.textContent = displayContent;
});



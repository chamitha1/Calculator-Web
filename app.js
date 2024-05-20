let firstNum;
let secondNum;
let operator;


const btnContainer = document.querySelector(".btn-container");
const display = document.querySelector(".display");
const btnClear = document.querySelector(".btn-clear")

let displayContent = "";


btnContainer.addEventListener("click",(evt)=>{
    if(evt.target == btnContainer ){
        displayContent +="";
    }else{
        displayContent += `${evt.target.textContent}`;
    }

    if (evt.target.textContent == "AC") displayContent = "";
    
    if (evt.target.textContent == "="){
        result = evaluate(displayContent);
        displayContent = result;
    } 

    display.textContent = displayContent;
});

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
    if(operator == '+') return num1+num2;
    if(operator == '-') return num1-num2;
    if(operator == '*') return num1*num2;
    if(operator == '/') return num1/num2;
    
    
}

function isOperator(val){
    switch(val){
        case '+':
            return true;
        case '-':
            return true;
        case '*':
            return true;
        case '/':
            return true;
         default:
            return false;
        }
}
function evaluate(str){
    let numAr = str.split(/[^0-9\" \"]/g);
    console.log(numAr);
    let firstNum = Number(numAr[0]);
    let secondNum = Number(numAr[1]);
    console.log(firstNum +" " + secondNum);
    let operator = str.split("")
                      .filter((x)=> isOperator(x));
    console.log(operator);
    return operate(operator,firstNum,secondNum); //Returns the result of operation

}
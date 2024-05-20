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
        numAr = evaluate(displayContent);
        let firstNum = numAr[1];
        let secondNum = numAr[2];
        let operator = numAr[0];
        let result;

        console.log(firstNum + " > " + secondNum+ " > "+" > "+operator);
        console.log(displayContent);

        if(!numAr.includes(operator)){
            result  = displayContent.split(/=/g)[0];
            console.log(result)
        }else{
            result = operate(operator,firstNum,secondNum);
        }
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

    let firstNum = Number(numAr[0]);
    let secondNum = Number(numAr[1]);
    let operator = str.split("")
                      .filter((x)=> isOperator(x));
    
    return [operator,firstNum,secondNum];

}
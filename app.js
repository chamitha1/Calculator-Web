let firstNum;
let secondNum;
let operator;
let displayContent = "0";

const btnContainer = document.querySelector(".btn-container");
const display = document.querySelector(".display");
const btnClear = document.querySelector(".btn-clear");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnNums = document.querySelectorAll(".btn-num");
const btnEqual = document.querySelector(".btn-equal");
const btnDecimal = document.querySelector(".btn-decimal");

display.textContent = '0'; //Setting display to 0

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

function isNum(val){
    if(Number(val) == NaN){
        return false;
    }else{
        return true;
    }
}

function evaluate(str){
    let numAr = str.split(/[^0-9.\" \"]/g);
    let firstNum = Number(numAr[0]);
    let secondNum = Number(numAr[1]);
    let operator = str.split("")
                      .filter((x)=> isOperator(x));
    
    let num_op = [operator,firstNum, secondNum] //returns as an array after seperating 
                                          //operators and numbers.
    return num_op;
}

//Numbers Listener
for(let i=0; i<btnNums.length ; i++){
    btnNums[i].addEventListener("click", (evt)=>{
        if(displayContent == '0') {
            displayContent = evt.target.textContent
            display.textContent = displayContent;
            return;
        } //replace 0

        displayContent += evt.target.textContent;
        display.textContent = displayContent;
    });
} 

//Operators Listener
for(let i=0; i<btnOperators.length; i++){
    btnOperators[i].addEventListener("click",(evt)=>{
        if(!(/[-+*/]/.test(displayContent))){   //YOU CAN CAPTURE THE OPERATOR FROM HERE TOO
            displayContent += evt.target.textContent;  
            display.textContent = displayContent;
        }
        return;
    });
}

//Equal Listener
btnEqual.addEventListener("click", (evt)=>{
    let numbers = displayContent.split(/[^0-9 ]/g);
    if(numbers.length < 2 || numbers[1] == '0') return; /* Checking if the user
                                                         entered 2 numbers.*/

    let num_op_arr = evaluate(displayContent);
    let num1 = num_op_arr[1];
    let num2 = num_op_arr[2];
    let op = num_op_arr[0];
    result = operate(op,num1,num2);
    displayContent = Math.round(result * 10)/10;
    display.textContent = displayContent;
}); 

//Decimal Listener
btnDecimal.addEventListener("click", (evt)=>{
    if(/[.]/.test(displayContent)) return;
    displayContent += ".";
    display.textContent = displayContent;
});

//Clear Listener
btnClear.addEventListener("click", (evt)=>{
    displayContent = 0;
    display.textContent = displayContent
});



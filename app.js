let firstNum;
let secondNum;
let operator;
let displayContent = "0";
let number = "";

const btnContainer = document.querySelector(".btn-container");
const display = document.querySelector(".display");
const btnClear = document.querySelector(".btn-clear");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnNums = document.querySelectorAll(".btn-num");
const btnEqual = document.querySelector(".btn-equal");
const btnDecimal = document.querySelector(".btn-decimal");
const btnBackspace = document.querySelector('.btn-back');

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

function equalFunction(){
    let num_op_arr = evaluate(number);
    let num1 = num_op_arr[1];
    let num2 = num_op_arr[2];
    let op = num_op_arr[0];
    result = operate(op,num1,num2);
    displayContent = Math.round(result * 10)/10;
    display.textContent = displayContent;
    number = displayContent;
}

function enterNum(evt){
    if(displayContent == '0') {
        //checking whether a keyboard event or mouse event 
        displayContent = (evt.type == "click") ? evt.target.textContent: evt.key;
        display.textContent = displayContent;
        return;
    } //replace 0

    displayContent += evt.type == "click" ? evt.target.textContent: evt.key;
    display.textContent = displayContent;
}

function enterOperator(evt){
    if(!(/[-+*/]/.test(number))){
        displayContent += evt.type == "click" ? evt.target.textContent: evt.key;
        number = displayContent;
        displayContent = "0";
        display.textContent = displayContent;
    }else{
        number += displayContent;
        equalFunction();
        //num + operator
        number += evt.type == "click" ? evt.target.textContent: evt.key ;
        displayContent = "0";
    }
}

function backspace(){
    let ar = display.textContent.slice(0,length-1);
    console.log(ar);
    displayContent = ar;
    display.textContent = ar;
}

function decimal(){
    if(/[.]/.test(displayContent)) return;
    displayContent += ".";
    display.textContent = displayContent;
}

//Numbers Listener
for(let i=0; i<btnNums.length ; i++){
    btnNums[i].addEventListener("click", enterNum )
}

//Operators Listener
for(let i=0; i<btnOperators.length; i++){
    btnOperators[i].addEventListener("click", enterOperator);
}

//Equal Listener
btnEqual.addEventListener("click", (evt)=>{
    number += displayContent;
    let numberAr = number.split(/[^0-9 ]/g);
    if(numberAr.length < 2 || numberAr[1] == '0') return; /* Checking if the user
                                                         entered 2 numbers.*/
    equalFunction();
    
}); 

//Decimal Listener
btnDecimal.addEventListener("click", decimal)

//Backspace Listener
btnBackspace.addEventListener('click',backspace)

//Clear Listener
btnClear.addEventListener("click", (evt)=>{
    displayContent = 0;
    number = "";
    display.textContent = displayContent
});


document.addEventListener("keyup", (evt)=>{
    switch(evt.key){
        case '1' :
            enterNum(evt);
            break;
        case '2':
            enterNum(evt);
            break;
        case '3':
            enterNum(evt);
            break;
        case '4':
            enterNum(evt);
            break;
        case '5':
            enterNum(evt);
            break;
        case '6':
            enterNum(evt);
            break;
        case '7':
            enterNum(evt);
            break;
        case '8':
            enterNum(evt);
            break;
        case '9':
            enterNum(evt);
            break;
        case '0':
            enterNum(evt);
            break;
        case '+':
            enterOperator(evt);
            break;
        case '-':
            enterOperator(evt);
            break;
        case '*':
            enterOperator(evt);
            break;
        case '/':
            enterOperator(evt);
            break;
        case '=':
            number += displayContent;
            let numberAr = number.split(/[^0-9 ]/g);
            if(numberAr.length < 2 || numberAr[1] == '0') return;
            equalFunction();
            break;
        case '.':
            decimal();
            break;
        case 'Backspace':
            backspace();
            break;

    }
});
// texts on buttons
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const operations = ['+','-','x','÷'];

//screen elements
let screen1 = document.querySelector('.screen1');
let screen2 = document.querySelector('.screen2');

//button elements
const buttons = Array.from(document.querySelectorAll('.symbol'));

//variables for calculation
let firstOperand = '';
let secondOperand = '';
let operation = '';
let operationOn = false;

//function for appending numbers
function appendNumbers(event){
    if(operationOn){
        screen2.textContent = "";
        operationOn = false;
    }
    screen2.textContent += event.target.textContent;
    secondOperand = parseFloat(screen2.textContent);
}

//function for appending operation and storing the variables for calculation
function appendOperation(event){
    if(secondOperand != ""){
        screen2.textContent = event.target.textContent;
        screen1.textContent = secondOperand;
        firstOperand = secondOperand;
        operation = screen2.textContent;
    }else{
        console.log("parthiv");
    }
    operationOn = true;

}

//adding eventListener to buttons
buttonsFinal = buttons.map((button) => {
    if(numbers.includes(button.textContent)){
        button.addEventListener('click',appendNumbers);
    }else if(operations.includes(button.textContent)){
        button.addEventListener('click',appendOperation);
    }
});
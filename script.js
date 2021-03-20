//variables
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equal')
const deleteNumber = document.querySelector('.delete')
const clearAll = document.querySelector('.clear')
var previousNumber = document.querySelector('.previous-operator')
var currentNumber = document.querySelector('.current-operator')
var computation 
var toCompute
cont = 0
cont2 = 0

//functions
function clear() {
    currentNumber.innerHTML = "";
    previousNumber.innerHTML = "";
    toCompute = 0
    computation = 0
    cont = 0 
    cont2 = 0
}

function deleteNum() {
    currentNumber.innerHTML = currentNumber.innerHTML.toString().slice(0, -1);
    console.log(currentNumber.innerHTML.toString().slice(0, -1))
}

function insert(number) {
    if (cont2 === 0) {    
        number = number.target.innerText
        if (number === '.' && currentNumber.innerHTML.includes('.')) {
            currentNumber.innerHTML = currentNumber.innerText
        } else {
            currentNumber.innerHTML = currentNumber.innerText + number
        }
    }else{
        currentNumber.innerHTML = ""
        cont2 = 0
        number = number.target.innerText
        if (number === '.' && currentNumber.innerHTML.includes('.')) {
            currentNumber.innerHTML = currentNumber.innerText
        } else {
            currentNumber.innerHTML = currentNumber.innerText + number
        }
    }
}

function operation(operator) {     
    if (currentNumber.innerText != '' && cont === 0) {
        operator = operator.target.innerText
        previousNumber.innerHTML = previousNumber.innerHTML + currentNumber.innerText + ' ' + operator + ' ';        
        toCompute = parseFloat(currentNumber.innerText)
        currentNumber.innerHTML = "";
        lastOperator = operator 
        cont++
    } else {
        operator = operator.target.innerText
        previousNumber.innerHTML = previousNumber.innerHTML + currentNumber.innerText + ' ' + operator + ' '; 
        calculate()
        toCompute = computation
        currentNumber.innerHTML = computation;
        lastOperator = operator
        cont2 = 1
    }
}

function calculate() {
    if (previousNumber.innerText != '') {

        switch (lastOperator){
            case '+':
                computation = (parseFloat(toCompute) + parseFloat(currentNumber.innerText))
                toCompute = computation                                       
                break
            case '-':
                computation = (parseFloat(toCompute) - parseFloat(currentNumber.innerText))
                toCompute = computation
                break
            case '*':
                computation = (parseFloat(toCompute) * parseFloat(currentNumber.innerText))
                toCompute = computation
                break
            case '÷':
                computation = (parseFloat(toCompute) / parseFloat(currentNumber.innerText))
                toCompute = computation
                break
            default:
                return
        } 
    }
}

function equal(){
    calculate()
    previousNumber.innerHTML = ""
    currentNumber.innerHTML = computation
    cont = 0
    cont2 = 0
}

//events
clearAll.addEventListener("click", clear)
deleteNumber.addEventListener("click", deleteNum)
equals.addEventListener("click", equal)
numbers.forEach(number => number.addEventListener("click", insert))
operators.forEach(operator => operator.addEventListener("click", operation))



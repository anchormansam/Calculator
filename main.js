var A = document.getElementById('Calculator');
A.setAttribute('class', 'container text-center');
var keys = ['C', '', '', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
var input = [];
// var defaultClear needs to clear after = is hit and another number  if operator has not been hit before a number

var title = document.createElement('div');
title.innerHTML = 'DO YOU MATH?';


function createCalc() {
    var calculator = document.createElement('div');
    calculator.className = 'calculator h-100';
    calculator.style = 'height:500px;';
    calculator.id = 'display';

    var display = document.createElement('div');
    display.setAttribute('class', 'text-right');
    display.setAttribute('id', 'output');
    display.innerHTML = "0";



    A.appendChild(calculator);
    A.appendChild(title);
    A.appendChild(display);


    var newRow = document.createElement('div');
    newRow.setAttribute('class', 'row d-flex align-items-stretch ');

    for (c = 0; c < 20; c++) {
        var newCol = document.createElement('button');
        newCol.setAttribute('class', 'col-3 button item-self-center border bg-light' + c);
        newCol.setAttribute('type', 'button');
        newCol.setAttribute('id', 'col' + c);

        newCol.innerHTML = `${keys[c]}`;

        if (keys[c]) {
            newCol.addEventListener("click", function () {
                console.log(input);

                switch (this.innerHTML) {
                    case '+':
                    case '-':
                    case '/':
                    case '*':
                        operators(this.innerHTML);
                        break;
                    case '=':
                        var firstValue = parseFloat(input[0]);
                        var operator = input[1];
                        var secondValue = parseFloat(input[2]);
                        var total = 0;
                        if (operator) {
                            switch (operator) {
                                case '+': total = firstValue + secondValue;
                                    break;
                                case '-': total = firstValue - secondValue;
                                    break;
                                case '/': total = firstValue / secondValue;
                                    break;
                                case '*': total = firstValue * secondValue;
                                    break;
                            }
                            displayCharacters(total);
                            input = [total.toString()];
                        }
                        break

                    case '.':
                        numbers(this.innerHTML);
                        break;
                    case 'C':
                        input = [];
                        displayCharacters(0);
                        break;
                    default:
                        numbers(this.innerHTML);

                }


            });
        }



        newRow.appendChild(newCol);
        calculator.appendChild(newRow);
    } A.appendChild(calculator);
}

// Display Key Characters
function displayCharacters(displayCharacter) {
    console.log('displayCharacter:', displayCharacter);

    var displayCalc = document.getElementById('output');

    displayCalc.innerHTML = displayCharacter;
}

function numbers(n) {
    var length = input.length;
// Check string length for x digits

    if (length > 0) {
        if (parseInt(input[length - 1], 10) >= 0) {
            // console.log('length', length, 'input', input)
            input[length - 1] = input[length - 1] + n;
            // console.log(length,  input)
        }

        else {
            input.push(n);
        }
    }
    else {
        input.push(n);
    }
    displayCharacters(input[input.length - 1]);
    

}


function operators(o) {
   var length = input.length;
    if (length > 0) {
        
        if (['+', '-', '*', '/'].includes(input[length - 1])) {
            input[length - 1] = o;
        }
        else {
            input.push(o);
        }
    }
    else {
        input.push(o);
    }
    displayCharacters(input[input.length - 1]);
}


function init() {
    A.innerHTML = "";
    createCalc();








}
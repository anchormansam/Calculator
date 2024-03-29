var equalPressed = false;
var A = document.getElementById('Calculator');
A.setAttribute('class', 'container text-center');
var keys = ['C', '', '', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
var input = [];
var total = 0;


// var defaultClear needs to clear after = is hit and another number  if operator has not been hit before a number

var title = document.createElement('div');
title.setAttribute('class', 'text-warning h2')
title.innerHTML = 'DO YOU MATH?';

function calculate() {
    // console.log(input);


    switch (this.innerHTML) {

        case '+':
        case '-':
        case '/':
        case '*':

            equalPressed = false;

            if (input[2]) {
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


                    input = []
                    input.push(total.toString());


                }
            }
            operators(this.innerHTML);

            break;
        case '=':
            equalPressed = true;
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


                input = []


                input.push(total.toString());

                // console.log(input);
            }
            // if a number is entered after = is hit then clear total 
            break;

        case '.':
            console.log(input[0]);
            decimal();
            numbers(this.innerHTML);

            break;
        case 'C':
            input = [];
            displayCharacters(0);
            break;
        default:
            if (equalPressed == true) {
                equalPressed = false;
                input = [];
                displayCharacters(0);
            }

            var allowEntry = true;
            if (input.length > 0) {
                // we have something in the input array
                // check the length of the first element
                if (input[0].length >= 9) {
                    allowEntry = false;
                }
            }

            if (input.length > 2) {
                // we have something in the input array
                // check the length of the first element
                if (input[2].length >= 9) {
                    allowEntry = false;
                }
            }

            // this pushes a number into input
            if (allowEntry) {
                numbers(this.innerHTML);
                allowEntry = true;
            }

    }
    console.log(input);
}


// console.log(input);


function createCalc() {
    var calculator = document.createElement('div');
    calculator.className = 'calculator h-100';
    calculator.style = 'height:500px;';
    calculator.id = 'display';

    var display = document.createElement('div');
    display.setAttribute('class', 'text-right text-warning display-2');
    display.setAttribute('id', 'output');
    display.innerHTML = "0";

    A.appendChild(calculator);
    A.appendChild(title);
    A.appendChild(display);

    var newRow = document.createElement('div');
    newRow.setAttribute('class', 'row d-flex align-items-stretch ');

    for (c = 0; c < 20; c++) {
        var newCol = document.createElement('button');
        newCol.setAttribute('class', 'col-3 btn spacing btn-outline-warning rounded-circle waves-effect');
        newCol.setAttribute('type', 'button');
        newCol.setAttribute('id', 'col' + c);
        newCol.innerHTML = `${keys[c]}`;

        if (keys[c]) {
            newCol.addEventListener("click", calculate);
        }
        newRow.appendChild(newCol);
        calculator.appendChild(newRow);
    } A.appendChild(calculator);
}

if (input[0] < 10 || input[2] < 10) {
}

// Display Key Characters
function displayCharacters(displayCharacter) {
    // console.log('displayCharacter:', displayCharacter);
    var displayCalc = document.getElementById('output');
    displayCalc.innerHTML = displayCharacter;
}

function numbers(n) {
    // console.log(input);
    var length = input.length;
    // Check string length for x digits
    // console.log(input);
    if (length > 0) {

        // we have a number that needs to be added
        if (parseInt(input[length - 1], 10) >= 0) {  // 0. == 0
            // console.log('length', length, 'input', input)
            if (n != ".") {
                input[length - 1] = input[length - 1] + n;
            }

            // console.log(length, input)
        }

        else {
            // we need to add an operator or a decimal
            // console.log(input);
            input.push(n);


        }
    }
    else {
        input.push(n);
    }
    displayCharacters(input[input.length - 1]);
}


function operators(o) {
    console.log(o);
    var length = input.length;
    // var retain = ;
    // console.log(retain)
    if (length > 0) {
        input[1] = o;
    }
    console.log();

}




function decimal() {
    console.log('decimal function,', input)
    if (input.length == 0) {
        input[0] = "0.";
    }
    else if (input.length == 1) {
        if (input[0].includes(".")) {
            console.log('error');

        }
        else {
            input[0] = input[0] + '.';
        }
    }
    else if (input.length == 2) {
        input[2] = "0.";
    }
    else if (input.length == 3) {
        if (input[2].includes(".")) {
            console.log('error');
        }
        else {
            input[2] = input[2] + '.';
        }
    }


    return input;
};





function init() {
    A.innerHTML = "";
    createCalc();
}

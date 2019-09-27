var A = document.getElementById('Calculator');
A.setAttribute('class', 'container');
var keys = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '=']

function createCalc() {
    var calculator = document.createElement('div');
    calculator.className = 'calculator h-100';
    calculator.style = 'height:500px;';
    var display = document.createElement('div');
    display.setAttribute('class', 'row d-flex');
    display.innerHTML = "POOP"
    A.appendChild(display);


    var newRow = document.createElement('div');
    newRow.setAttribute('class', 'row d-flex align-items-stretch ');

    for (c = 0; c < 20; c++) {
        var newCol = document.createElement('button');
        newCol.setAttribute('class', 'col-3 button item-self-center border bg-light' + c);
        newCol.setAttribute('type', 'button');
        newCol.setAttribute('id', 'col' + c)
        newCol.innerHTML = `${keys[c]}`;
        // newCol.Col0.innerHTML = 'C';
        newRow.appendChild(newCol);
        calculator.appendChild(newRow);
    } A.appendChild(calculator);
}


function init() {
    A.innerHTML = "";
    createCalc();
}
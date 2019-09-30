

// Numbers 1,2,3,4,5,6,7,8,9,0
function numbers(n) {
    var length = input.length;

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


// Operators + - * /
function operators() {


}

// Extenders = . 
function extenders() {

}


// Clear/ Clear All
function clear() {


}

// Number -> Operator or Extender -> number -> Output
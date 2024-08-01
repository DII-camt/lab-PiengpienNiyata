let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
    display.value = '';
    expression = '';
}

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function calculate() {
    display.value = eval(expression);
    expression = '';
}

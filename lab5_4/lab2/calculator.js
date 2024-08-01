let history = [];

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        history.push(display.value);
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function undo() {
    let display = document.getElementById('display');
    if (history.length > 0) {
        display.value = history.pop();
    } else {
        display.value = '';
    }
}

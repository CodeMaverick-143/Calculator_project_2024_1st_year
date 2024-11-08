const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';
let previousInput = '';
let operator = '';

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return b;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator).toString();
                display.value = currentInput;
                previousInput = '';
                operator = '';
            }
        } else {
            if (currentInput) {
                if (previousInput) {
                    previousInput = calculate(previousInput, currentInput, operator).toString();
                    display.value = previousInput;
                } else {
                    previousInput = currentInput;
                }
                currentInput = '';
                operator = value;
            }
        }
    });
});

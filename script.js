const mainDisplay = document.getElementById('main-display');
const secondaryDisplay = document.getElementById('secondary-display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';
let secondaryInput = '';
let operator = '';
let resultCalculated = false;
let history = []; // Array to store history

function calculateExpression(expression) {
    try {
        // Replace operators for eval function
        return eval(expression.replace('×', '*').replace('÷', '/').replace('^', '**'));
    } catch {
        return 'Error';
    }
}

function updateHistory(expression, result) {
    history.push(`${expression} = ${result}`);
    // Optionally, you can limit history length
    if (history.length > 10) history.shift(); // Keep last 10 entries
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            if (resultCalculated) {
                currentInput = value;
                resultCalculated = false;
            } else {
                currentInput += value;
            }
            mainDisplay.value = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            secondaryInput = '';
            operator = '';
            mainDisplay.value = '';
            secondaryDisplay.value = '';
        } else if (value === '±') {
            currentInput = currentInput ? (-parseFloat(currentInput)).toString() : '';
            mainDisplay.value = currentInput;
        } else if (value === 'π') {
            currentInput = Math.PI.toString();
            mainDisplay.value = currentInput;
        } else if (value === '√') { // Square root
            if (currentInput) {
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                mainDisplay.value = currentInput;
            }
        } else if (value === '=') {
            if (currentInput && secondaryInput) {
                // Concatenate current input to secondary input
                secondaryInput += currentInput;
                const result = calculateExpression(secondaryInput);
                mainDisplay.value = result; // Display result in main display
                updateHistory(secondaryInput, result); // Update history
                secondaryDisplay.value = `${secondaryInput} = ${result}`; // Show last calculation
                // Reset for next calculation
                currentInput = ''; // Clear current input
                secondaryInput = ''; // Clear secondary input for new expression
                operator = ''; // Reset operator
                resultCalculated = true; // Indicate that a result has been calculated
            }
        } else if (['+', '−', '×', '÷', '^'].includes(value)) {
            if (currentInput) {
                if (resultCalculated) {
                    secondaryInput = currentInput + value; // Start a new expression
                    resultCalculated = false;
                } else {
                    secondaryInput += currentInput + value; // Append to existing expression
                }
                secondaryDisplay.value = secondaryInput.replace('×', '*').replace('÷', '/');
                currentInput = ''; // Clear current input
                mainDisplay.value = ''; // Clear main display
            }
        } else if (['sin', 'cos', 'tan', 'log', 'exp'].includes(value)) {
            if (currentInput) {
                let computedValue;
                switch (value) {
                    case 'sin':
                        computedValue = Math.sin(parseFloat(currentInput) * Math.PI / 180);
                        break;
                    case 'cos':
                        computedValue = Math.cos(parseFloat(currentInput) * Math.PI / 180);
                        break;
                    case 'tan':
                        computedValue = Math.tan(parseFloat(currentInput) * Math.PI / 180);
                        break;
                    case 'log':
                        computedValue = Math.log10(parseFloat(currentInput));
                        break;
                    case 'exp': // Exponential
                        computedValue = Math.exp(parseFloat(currentInput));
                        break;
                }
                currentInput = computedValue.toString();
                mainDisplay.value = currentInput;
            }
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const button = Array.from(buttons).find(btn => btn.textContent === key);
    if (button) {
        button.click();
    }
});

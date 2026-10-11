const exprInput = document.getElementById('exprInput');
const calcBtn = document.getElementById('calcBtn');
const resultArea = document.getElementById('resultArea');

function performCalculation() {
    const val = exprInput.value.trim();
    if (!val) {
        resultArea.textContent = "Please enter an expression.";
        resultArea.className = "text-red-400 text-sm mt-1";
        return;
    }

    try {
        if (!/^[\d\+\-\*\/\.\(\)\s]+$/.test(val)) {
            throw new Error("Invalid characters");
        }

        const result = Function('"use strict";return (' + val + ')')();

        if (result === undefined || isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid result");
        }

        resultArea.textContent = `Result: ${result}`;
        resultArea.className = "text-white text-base font-medium mt-1";
    } catch (error) {
        resultArea.textContent = "Invalid expression. Try '12 * 8'.";
        resultArea.className = "text-red-400 text-sm mt-1";
    }
}

calcBtn.addEventListener('click', performCalculation);

exprInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        performCalculation();
    }
});
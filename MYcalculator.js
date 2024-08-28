
const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const buttons = document.querySelector('.buttons')
const percentButton = document.getElementById('percent');

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        const value = e.target.value;
        switch (value) {
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
                break;
            case 'AC':
                display.value = '';
                break;
            case 'c':
                display.value = display.value.slice(0, -1);
                break;
            case 'sin':
                display.value = Math.sin(display.value);
                break;
            case 'cos':
                display.value = Math.cos(display.value);
                break;
            case 'tan':
                display.value = Math.tan(display.value);
                break;
            case 'sqrt':
                display.value = Math.sqrt(display.value);
                break;
            case 'log':
                display.value = Math.log(display.value);
                break;
            case 'ln':
                display.value = Math.log(display.value) / Math.log(Math.E);
                break;
            case 'e':
                display.value = Math.E;
                break;
            case 'π':
                display.value = Math.PI;
                break;
            case '%':
                const currentValue = parseFloat(display.value);
                display.value = (currentValue / 100).toString();
                break;
            default:
                display.value += value;
        }
    }
});

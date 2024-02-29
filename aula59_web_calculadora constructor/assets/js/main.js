function Calculator(){
    const display = document.querySelector('.display');

    this.run = function(){
        clickButtons();
        pressKeys();
    };

    const pressKeys = function() {
        document.addEventListener('keyup', e => {
            if (e.key == 'Backspace') {
                delNumber();
            }
            if (e.key == 'Delete') {
                clearDisplay();
            }
            if (e.key == 'Enter') {
                result();
            }
        });
    };

    const clearDisplay = function() {
        display.value = '';
    };

    const delNumber = function() {
        display.value = this.display.value.slice(0, -1);
    };

    const showInDisplay = function(content) {
        display.value += content;
    };

    const result = function() {
        const expression = display.value;

        try {
            const calc = eval(expression);

            if (!calc) {
                alert('Valor inválido');
            } else {
                clearDisplay();
                showInDisplay(calc);
            }

        } catch (e) {
            console.log(e);
        }
    };

    const clickButtons = function() {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                showInDisplay(el.textContent);

            }

            if (el.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                delNumber();
            }

            if (el.classList.contains('btn-eq')) {
                result();
            }
        })
    };

}

const calculator = new Calculator();
calculator.run();
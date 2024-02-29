// const isplay = document.querySelector('.display');
// isplay.style.background = 'red';


// const operators = ['/', '*', '+', '-']
// const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']




// const btns = document.querySelectorAll('.btn');
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         let btnPress = btn.textContent
//         console.log(btnPress)


//     });
// });



function createCalculator() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),

        run() {
            this.clickButtons();
            this.pressKeys();
        },

        pressKeys() {
            document.addEventListener('keyup', e => {
                if (e.key == 'Backspace') {
                    this.delNumber();
                }
                if (e.key == 'Delete') {
                    this.clearDisplay();
                }
                if (e.key == 'Enter') {
                    this.result();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        delNumber() {
            this.display.value = this.display.value.slice(0, -1);
        },

        showInDisplay(content) {
            this.display.value += content;
        },

        result() {
            const expression = this.display.value;

            try {
                const calc = eval(expression);

                if (!calc) {
                    alert('Valor inválido');
                } else {
                    this.clearDisplay();
                    this.showInDisplay(calc);
                }

            } catch (e) {
                console.log(e);
            }


        },

        clickButtons() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.showInDisplay(el.textContent);

                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delNumber();
                }

                if (el.classList.contains('btn-eq')) {
                    this.result();
                }
            })
        },

    };
}


const calculator = createCalculator();
calculator.run();
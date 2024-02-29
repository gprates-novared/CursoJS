function myContext() {
    const formulario = document.querySelector('#formulario');
    const resultado = document.querySelector('#form-result');

    let count = 1;
    function receiveEventForm(event) {
        event.preventDefault();

        const peso = formulario.querySelector('#peso').value;
        const altura = formulario.querySelector('#altura').value;

        const response = resultImc(peso, altura);

        resultado.innerHTML = response;

        console.log(count++, peso, altura);
    };

    formulario.addEventListener('submit', receiveEventForm);
}

myContext();


function resultImc(weight, height) {

    const regex = /^-?\d+(\.\d+)?$/;

    if (!regex.test(weight) || !regex.test(height)) {
        if (!regex.test(weight) && !regex.test(height)) {
            return `<p class='invalid_number'>Peso e altura inválidos</p>`;
        } else if (!regex.test(weight)) {
            return `<p class='invalid_number'>Peso inválido</p>`;
        } else if (!regex.test(height)) {
            return `<p class='invalid_number'>Altura inválida</p>`;
        }
    } else {
        const imc = Number((weight / (height ** 2)).toFixed(2))

        let resultType, resultClass;

        if (imc >= 0 && imc < 18.5) {
            resultType = 'Abaixo do peso';
            resultClass = 'abaixo_do_peso';
        } else if (imc >= 18.5 && imc < 25) {
            resultType = 'Peso normal';
            resultClass = 'peso_normal';
        } else if (imc >= 25 && imc < 30) {
            resultType = 'Sobrepeso';
            resultClass = 'sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            resultType = 'Obesidade grau 1';
            resultClass = 'grau_um';
        } else if (imc >= 35 && imc < 39.9) {
            resultType = 'Obesidade grau 2';
            resultClass = 'grau_dois';
        } else {
            resultType = 'Obesidade grau 3';
            resultClass = 'grau_tres';
        }

        return `<p class='${resultClass}'>Seu IMC é ${imc} (${resultType})</p>`

    }


}
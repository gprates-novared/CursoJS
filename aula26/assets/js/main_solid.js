function myContext() {
    const formulario = document.querySelector('#formulario');
    const resultado = document.querySelector('#form-result');


    function receiveEventForm(event) {
        event.preventDefault();

        const peso = formulario.querySelector('#peso').value;
        const altura = formulario.querySelector('#altura').value;

        const response = resultImc(peso, altura);

        resultado.innerHTML = response;
    };

    formulario.addEventListener('submit', receiveEventForm);
}



function validarInputs(weight, height) {
    const regex = /^-?\d+(\.\d+)?$/;
    return regex.test(weight) && regex.test(height);
}

function calcImc(weight, height) {
    return Number((weight / (height ** 2)).toFixed(2));
}


function determinarCategoriaImc(imc) {
    const categoriasImc = [
        { limite: 18.5, tipo: 'Abaixo do peso', classe: 'abaixo_do_peso' },
        { limite: 25, tipo: 'Peso normal', classe: 'peso_normal' },
        { limite: 30, tipo: 'Sobrepeso', classe: 'sobrepeso' },
        { limite: 35, tipo: 'Obesidade grau 1', classe: 'grau_um' },
        { limite: 39.9, tipo: 'Obesidade grau 2', classe: 'grau_dois' },
        { limite: Infinity, tipo: 'Obesidade grau 3', classe: 'grau_tres' }
    ];
    const categoria = categoriasImc.find(categoria => imc < categoria.limite);
    return categoria ? categoria : null;
}


function resultImc(weight, height) {

    const regex = /^-?\d+(\.\d+)?$/;

    if (!validarInputs(weight, height)) {
        return `<p class='invalid_number'>Peso ou altura inválidos</p>`;
    } else {
        const imc = calcImc(weight, height);

        const categoria = determinarCategoriaImc(imc);

        if (categoria) {
            return `<p class='${categoria.classe}'>Seu IMC é ${imc} (${categoria.tipo})</p>`;
        } else {
            return `<p class='invalid_number'>Não foi possível determinar a categoria do IMC</p>`;
        }
    }
}

myContext();
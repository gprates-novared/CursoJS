function myScope(){
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    //formulario.onsubmit = function (event) {
    //    event.preventDefault();
    //    alert(1);
    //};
    
    const pessoas = [];


    function receiveEventForm (event) {
        event.preventDefault();
        const nome = formulario.querySelector('.nome').value;
        const sobrenome = formulario.querySelector('.sobrenome').value;
        const peso = formulario.querySelector('.peso').value;
        const altura = formulario.querySelector('.altura').value;

        const data = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };

        pessoas.push(data);
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}`;
    }

    formulario.addEventListener('submit', receiveEventForm);
    
}

myScope();
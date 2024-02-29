function anything() {
    console.log(112345);
}

anything();


// IIFE ->  Immediately invoked function expression

(function () {
    const nome = 'Gustavo'
    console.log(nome);
})();

(function (idade, peso, altura) {
    const nome = 'Gustavo';
    const sobrenome = 'Prates';
    function createName(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(createName(nome));
    }

    falaNome();
    console.log(idade, peso, altura);
})(22,85,1.70);
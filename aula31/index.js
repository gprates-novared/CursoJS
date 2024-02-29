const verdadeira = true;

// Let tem escopo de bloco { ... bloco }


let nome = 'Gustavo';
var nome1 = 'Gustavo_1';
var nome1 = 'Teste';

if (verdadeira){
    let nome = 'Escopo de bloco'; // Let tem escopo de bloco { ... bloco }. Aqui está dentro do bloco if (verdaderia) { ... }
    console.log(nome,nome1)
}
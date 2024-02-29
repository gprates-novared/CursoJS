function media(n1 ,n2 ,n3){
    let calc = (Number(n1) + Number(n2) + Number(n3)) / 3.0;
    return calc.toFixed(2);
}

function validacao(media){
    let resultado;
    if( media < 7 ){
        resultado = 'Reprovado';
    } else {
        resultado = 'Aprovado'
    }
    document.body.innerHTML += `<h3>Status: ${resultado}</h3>`
}

let nota1 = prompt('Primeira nota:');
let nota2 = prompt('Segunda nota:');
let nota3 = prompt('Terceira nota:');
let calc = media(nota1, nota2, nota3);

document.body.innerHTML = `<h1>Média: ${calc}</h1>`
validacao(calc)

document.body.innerHTML += `<h1>Média: ${calc2}</h1>`

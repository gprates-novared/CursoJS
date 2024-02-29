// const frutas = ['morango', 'melancia', 'uva', 'banana'];

// for (let i =0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

// for (let i in frutas){
//     console.log(frutas[i]);
// }


const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Prates',
    idade: 30
};


for (chave in pessoa){
    console.log(chave, pessoa[chave]);
}
const frutas = ['morango', 'melancia', 'uva', 'banana'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log('\n+--+--+--+--+--+--+--+\n')

for (let i in frutas) {
    console.log(frutas[i]);
}

console.log('\n+--+--+--+--+--+--+--+\n')

for (let valor of frutas) {
    console.log(valor);
}

console.log('\n+--+--+--+--+--+--+--+\n')

frutas.forEach(function (elemento, indice, array) {
    return console.log(elemento, indice, array)
});
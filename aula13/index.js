let a = '0123456789';

a = "Era uma vez, Dois Passaros alados"

console.log(a[2]);
console.log(a[-1]);
console.log(a.charAt(3));
console.log(a.split('f'));
console.log(a.concat(' alfabeto'));
console.log(a.indexOf('teste'));
console.log(a.indexOf('teste', 3));
console.log(a.lastIndexOf('teste'));
console.log(a.match(/[a-z][a-z][a-z]/g)); //expressão regular
console.log(a.replace(/[a-z][a-z][a-z]/g, 'tomate'));
console.log(a.slice(13,17));
// let a = 'A';
// let b = 'B';
// let c = 'C';


// console.log(a,b,c);
// [a,b,c] = [b,c,a];

// console.log(a,b,c);

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// const primeiroNum = numeros[0];

// const [priNum, segNum, terNum, ... resto ] = numeros;

// const [um , , tre, , cinco] = numeros;

// console.log(priNum, segNum, terNum, resto);


const nums = [
    ['abacate','amora','abacaxi'],
    ['mamão','morango','melancia'],
    ['caju','castanha','coco']
];

const [[a,b,c], [d,e,f], [g,h,i]] = nums;
const [frutaA, frutaM, frutaC] = nums;

console.log(b,f,g);
console.log(frutaA[1], frutaM[2], frutaC[0]);
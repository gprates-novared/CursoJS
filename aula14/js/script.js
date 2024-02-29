let num1 = 11;
let num2 = 2.2;
let result = num1.toString() + num2;

let num3 = 0.9;
let num4 = 0.1;
let result2 = num3 + num4;


document.body.innerHTML = `${result}`;
document.body.innerHTML += `<br>typeof = ${typeof parseInt(result)}`;
document.body.innerHTML += `<br>Hexa = ${parseInt(result).toString(16)}`;
document.body.innerHTML += `<br>Binario = ${parseInt(result).toString(2)}`;
document.body.innerHTML += `<br>Number.isInteger = ${Number.isInteger(num1)}`;
document.body.innerHTML += `<br>Number.isNaN = ${Number.isNaN(result * 'ola')}`;
document.body.innerHTML += `<br>${Number.isInteger(result2)}`;
document.body.innerHTML += `<br>${result2.toString(2)}`;

document.body.innerHTML += `<br>${result2}`;


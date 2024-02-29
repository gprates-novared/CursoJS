const nome = 'Gustavo';
const sobrenome = 'Prates dos Santos';
const idade = 22;
const peso = 84;
const altura = 1.75;

let imc = peso / (altura ** 2);

console.log(imc);

console.log(nome + " " + sobrenome + " tem " + idade + ", pesa " + peso + "Kg, tem " + altura + " de altura e seu IMC é de: " + imc)
console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso}Kg, tem ${altura} de altura e seu IMC é de: ${imc.toFixed(2)}`)
// function validar(num1, num2){
//     if (num1 > num2){
//         return num1;
//     } else {
//         return num2;
//     }
// }


// function validar(num1, num2){
//     return num1 > num2 ? num1 : num2;
// }

// const teste = validar(6,5);


// const num1 = 14;
// const num2 = 8;
// const teste = num1 > num2 ? num1 : num2


const validar = (num1, num2) => num1 > num2 ? num1 : num2;

const teste = validar(15,6);

console.log(`O ${teste} é maior`);
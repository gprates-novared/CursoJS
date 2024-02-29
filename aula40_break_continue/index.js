const numeros = [0,1,2,3,4,5,6,7,8,9];

for (let numero of numeros){
    
    if (numero == 2 || numero == 5){
        console.log('pula');
        continue;
    } else if (numero == 8) {
        console.log('Pediu pra parar, parou!')
        break
    }
    console.log(numero);
}
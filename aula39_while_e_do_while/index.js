
// let control = 0;

// while (control <= 10){
//     console.log(control);
//     control++;
// }

function random(min, max){
    const r = Math.random() * (max -min) + min;
    return Math.floor(r);
}

let rand = random(0,51);

while (rand != 50){
    rand = random(0,51);
    console.log('Invalido', rand);
}

console.log('localizado ==================================================================================');

do {
    rand = random(0,51);
    console.log('Invalido', rand);
} while(rand != 34);
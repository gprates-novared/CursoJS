// const data = new Date();

// let diaSemana = data.getDay();
// diaSemana = 1;

// const diaTexto = [
//     {numero: 0, texto: 'Domingo'},
//     {numero: 1, texto: 'Segunda'},
//     {numero: 2, texto: 'Terça'},
//     {numero: 3, texto: 'Quarta'},
//     {numero: 4, texto: 'Quinta'},
//     {numero: 5, texto: 'Sexta'},
//     {numero: 6, texto: 'Sábado'},
// ]

// const diaSemanaTexto = diaTexto.find(d => d.numero == diaSemana).texto;

// console.log(diaSemana);
// console.log(diaSemanaTexto);



// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = '';
//         break;
// }


// console.log(diaSemana, diaSemanaTexto);


const data = new Date();

let diaSemana = data.getDay();


function getDiaSemanaTexto(getDiaSemana){
    switch (getDiaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return '';
    }
}

console.log(getDiaSemanaTexto(diaSemana));
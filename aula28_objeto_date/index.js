// const tresHoras = 60 * 60 * 3 *1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(); // a, m, d, h, M, s, ms


//const data = new Date('2022-11-19 20:20:20');
//console.log(data.getHours());
//console.log(data.toString());


const zeroLeft = number => number > 0 && number < 10 ? `0${number}` : number;


function formatLeft(number){
    return number > 0 && number < 10 ? `0${number}` : number;
}






function formatData(data){
    const ano = zeroLeft(data.getFullYear());
    const mes = zeroLeft(data.getMonth());
    const dia = zeroLeft(data.getDate());
    const hora = zeroLeft(data.getHours());
    const min = zeroLeft(data.getMinutes());
    const sec = zeroLeft(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;

}

const date = new Date();

const dateBrazil = formatData(date);

console.log(dateBrazil);
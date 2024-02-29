// try {
//     console.log('Abri o arquivo');
//     throw new Error('Erro ao ler o arquivo');
//     console.log('fechar o arquivo');
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log('fechar o arquivo');
// }

function returnHour(date){
    if (date && !(date instanceof Date)){
        throw new TypeError('Não é uma instância de Date.');
    }

    if (!date){
        date = new Date();
    }

    return console.log(date.toString());
}



const dataOntem = new Date('2024', '01', '14');

returnHour(dataOntem);
returnHour();


function myContext(){
    const container = document.querySelector('.container');
    container.innerHTML = response();
}


const data = new Date();

function diaSemanaTexto(diaNumero){
    const diaDict = [
        {numero: 0, texto: 'Domingo'},
        {numero: 1, texto: 'Segunda-feira'},
        {numero: 2, texto: 'Terça-feira'},
        {numero: 3, texto: 'Quarta-feira'},
        {numero: 4, texto: 'Quinta-feira'},
        {numero: 5, texto: 'Sexta-feira'},
        {numero: 6, texto: 'Sábado'},
    ]
    return diaDict.find(n => n.numero == diaNumero).texto;
}

function mesTexto(mesNumero){
    const mesDict = [
        {numero: 0, texto: 'janeiro'},
        {numero: 1, texto: 'fevereiro'},
        {numero: 2, texto: 'março'},
        {numero: 3, texto: 'abril'},
        {numero: 4, texto: 'maio'},
        {numero: 5, texto: 'junho'},
        {numero: 6, texto: 'julho'},
        {numero: 7, texto: 'agosto'},
        {numero: 8, texto: 'setembro'},
        {numero: 9, texto: 'outubro'},
        {numero: 10, texto: 'novembro'},
        {numero: 11, texto: 'dezembro'},
    ]
    return mesDict.find(m => m.numero == mesNumero).texto;
}

function response(){
    const diaResponse = data.getDate();
    const mesResponse = mesTexto(data.getMonth());
    const anoResponse = data.getFullYear();
    const diaSemanaReponse = diaSemanaTexto(data.getDay());
    const horaResponse = data.getHours();
    const minutoReponse = data.getMinutes();

    return `<h2>${diaSemanaReponse}, ${diaResponse} de ${mesResponse} de ${anoResponse} ${horaResponse}:${minutoReponse}</h2>`

}

myContext();
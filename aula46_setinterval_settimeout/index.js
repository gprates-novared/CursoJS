function showHour(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', { hour12: false });
}


// function funcInterval(){
//     console.log(showHour());
// }

const timer = setInterval(funcInterval => funcInterval = console.log(showHour()), 1000);


setTimeout(funcStop => funcStop = clearInterval(timer), 5000)
setTimeout(function (){ console.log('teste')}, 10000);
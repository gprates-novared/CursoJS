const container = document.querySelector('.container');
const h2 = document.createElement('h2');
const div_buttons = document.createElement('div');


const buttons = {
    'Iniciar': 'button',
    'Pausar': 'button',
    'Zerar': 'button',
}


for (indice in buttons){
    const elemento = document.createElement(buttons[indice]);
    elemento.textContent = indice;
    elemento.style = 'margin-right: 0.75rem';
    
    elemento.classList.add(indice.toLowerCase());
    div_buttons.appendChild(elemento);
}


function timer(increment){
    const time = new Date(0,0,0,0,0,increment);
    return time.toLocaleTimeString('pt-BR', { hour12:false });
}

// //console.log(timer());

let segundos = 1;

function h2_zerar() { h2.textContent = timer(0); h2.style = 'color: black;'; }
h2_zerar();
container.appendChild(h2);
container.appendChild(div_buttons);


let crono;
function cronometer (action){
    
    if (action == 'start'){
        if (!crono) { 
            h2.style = 'color: black;'
            crono = setInterval(() => h2.innerHTML = timer(segundos++), 1000);
        }  
    } else if (action == 'pause'){
        h2.style = 'color: red;'
        clearInterval(crono);
        crono = null;
    } else if (action == 'zerar'){
        
        segundos = 1;
        h2_zerar();
    }
    
}



// function eventIniciar (){
    
//     cronometer('start');
    
// }

// document.getElementById('iniciar').addEventListener('click', eventIniciar);

// function eventPausar (){
//     cronometer('pause');
// }

// document.getElementById('pausar').addEventListener('click', eventPausar);

// function eventZerar (){
//     cronometer('zerar');
// }

// document.getElementById('zerar').addEventListener('click', eventZerar);


document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('iniciar')){
        cronometer('start');
    }

    if (el.classList.contains('pausar')){
        cronometer('pause');
    }

    if (el.classList.contains('zerar')){
        cronometer('zerar');
    }
});

//setInterval(funcTimer => funcTimer = (h2.innerHTML = timer(i++)), 1000);
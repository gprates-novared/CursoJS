function soma(a,b){
    return a+b;
}

let count = 0;

const button_sub = document.getElementById('button_sub');
const h1 = document.querySelector('.h1');

button_sub.addEventListener('click', function(){
    if (button_sub.innerText == 'Enviar'){
        button_sub.innerHTML = 'Receber';
        h1.innerHTML = 'Enviado';
    } else { 
        button_sub.innerHTML = 'Enviar';
        h1.innerHTML = 'Recebido';
    }
});


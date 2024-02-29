const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p'); //selecionar varios elementos

const estilosBody = getComputedStyle(document.body); //obter o css do body
const backgroundBody = estilosBody.backgroundColor; //obter o background


console.log(backgroundBody);

for (p of ps){ //interagir com os varios elementos
    console.log(p);
    
    p.style = `background-color: ${backgroundBody}; color: white`
    
}
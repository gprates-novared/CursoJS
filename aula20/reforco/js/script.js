function myScope() {
    
    const formulario = document.querySelector('.formulario');
    const credenciais = document.querySelector('.credenciais');
    console.log(formulario);

    function authetication(event){
        event.preventDefault();
        const email = formulario.querySelector('.email').value;
        const senha = formulario.querySelector('.senha').value;

        console.log(email,senha);

        credenciais.innerHTML += `<br>${email} ${senha}`;


    }

    formulario.addEventListener('submit', authetication);

}


myScope();
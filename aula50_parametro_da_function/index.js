function funcao(){
    
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }

    for (argument of arguments){
        console.log(argument);
    }
}

funcao('Teste',1,2,3,4,5,6,7);


function returnFunction(){
    const nome = 'Gustavo';
    return function(){
        return nome;
    };
}

const funcao = returnFunction();

console.dir(funcao);
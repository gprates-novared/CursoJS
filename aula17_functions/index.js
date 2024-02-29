function saudacao(nome) {
    let hello = `Hello, ${nome}`;
    return hello
}


const raiz = function (n){ 
    return n ** 0.5; 
};



console.log(saudacao('Gustavo'));
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));
console.log(raiz(49));
console.log(raiz(64));
console.log(raiz(81));
console.log(raiz(100));


const raiz_arrow_function = n => n**0.5;
console.log(raiz_arrow_function(9));
//Declaraçao de função (function hoisting - JS eleva as funções para o topo do arquivo. Portanto sempre será declarada primeiro automaticamente)

function helloWorld(){
    console.log('Declaração de Função');

}


//Function expression

const oneData = function (){
    console.log('Function expression');
}

function runFunction(funct){
    console.log('Running Below ');
    funct();
}

runFunction(oneData);


// Arrow Function

const funcSum = (n1, n2) => console.log(`Arrow Function ${n1 + n2}`);
funcSum(3,6)


// Dentro de um Objeto

const object = {
    talk: function(){ console.log(`Dentro de um objeto`)}
};

object.talk();
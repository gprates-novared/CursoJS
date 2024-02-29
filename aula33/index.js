const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Prates',
    idade: 23,
    endereco: {
        rua: 'Santo Antonio',
        numero: 260,
        bairro: 'Vila Santo Antonio',
        cep: '09450000',
        cidade: 'Rio Grande da Serra',
        estado: 'SP'
    }
};

const { sobrenome, idade } = pessoa;

const { endereco: {rua, bairro}, endereco } = pessoa;

const { nome, ... resto } = pessoa;



console.log(nome, sobrenome, idade, rua, bairro, endereco );

console.log(nome, resto);
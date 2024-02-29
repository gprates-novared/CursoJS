function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Gustavo', 'Prates', 22);

console.log(pessoa1.nome);

const novaPessoa = {
    nome: 'Gustavo',
    sobrenome: 'Prates', 
    idade: 22,

    dados() {
        return `Nome: ${this.nome} ${this.sobrenome}. Idade: ${this.idade}`;
    },

    incrementaIdade() {
        ++this.idade;
        return this.dados();
    }
};

console.log(novaPessoa.dados());
console.log(novaPessoa.incrementaIdade());
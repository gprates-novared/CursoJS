function createPerson(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // Getter 
        get nomeComp() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeComp(valor) {
            valor = valor.split(' ');
            this.nome = valor[0];
        },
        fala: function (assunto) {
            return `${this.nomeComp} está falando: ${assunto}`;
        },
        altura: a,
        peso: p,
        imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
        // Getter
        get imc2() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },

        
    };
}


const p1 = createPerson('Gustavo', 'Prates', 1.76, 85);
p1.nomeComp = 'Luara Vasconcelos';

console.log(p1.fala(`Seu IMC é ${p1.imc()}`));


console.log(p1.imc());
console.log(p1.imc2);
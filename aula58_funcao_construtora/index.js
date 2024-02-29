// Função construtora -> Retorna Objetos
// Factory Functions - > Fabrica objetos

// Constructor functions -> 

function Pessoa(nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.fullName = function(){
        console.log(this.nome, this.sobrenome);
    }
}

const p1 = new Pessoa('Gustavo', 'Prates');
const p2 = new Pessoa('Luara', 'Vasconcelos');

p1.fullName();

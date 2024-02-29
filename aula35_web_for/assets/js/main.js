const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for (i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    // const tag = elementos[i].tag;
    // const texto = elementos[i].texto;

    let criarTag = document.createElement(tag);

    criarTag.innerHTML = texto;

    div.appendChild(criarTag);

    //let tags_criadas = `<${tag}> ${texto} </${tag}>`;
}

container.appendChild(div);
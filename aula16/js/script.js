const alunos = ['Luiz', 'Maria', 'Joao'];


let result = alunos;

document.body.innerHTML = `${result}`;
console.log(result);


result.push('Marta');
document.body.innerHTML += `<br>${result}`;
console.log(result);

result.unshift('Graça');
document.body.innerHTML += `<br>${result}`;
console.log(result);

document.body.innerHTML += `<br>Teste Slice: ${result.slice(1,3)}`;
console.log(`${result.slice(1,3)}`);

result.pop('');
document.body.innerHTML += `<br>Pop (remover o ultimo): ${result}`;
console.log(result);

result.shift();
document.body.innerHTML += `<br>Shift (remover o primeiro): ${result}`;
console.log(result);
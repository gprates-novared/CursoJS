function hello (){
    return 'Hello, World.';
}

let welcome = true;

console.log(welcome && hello());


let goodbye = false;

console.log(goodbye || 0 || null || hello());
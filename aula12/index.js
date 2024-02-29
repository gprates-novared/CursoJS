let a = 'A';
let b = 'B';
let c = 'C';


[a,b,c] = [b,c,a]

console.log(a,b,c);

const aa = a;


a = b;
b = c;
c = aa;

console.log(a,b,c);













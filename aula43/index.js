function tester(num) {
    if (typeof num == 'number'){
    if (num % 3 == 0 && num % 5 == 0){
        return 'FizzBuzz';
    } else if (num % 5 == 0){
        return 'Buzz'
    } else if (num % 3 == 0){
        return 'Fizz'
    } else {
        return num;
    }} else {
        return `não é um número: '${num}'`;
    }
    
}

for (let i = 1; i <= 100; i++){
    console.log(tester(i));
}

console.log(tester('asd'));
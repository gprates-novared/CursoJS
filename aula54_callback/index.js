function timeRandom() {
    return Math.floor(Math.random() * 5000);
}


function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, timeRandom());    
}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, timeRandom());
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, timeRandom());
}

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Hello, World!');
//         });
//     });
// });

//f1(() => f2(() => f3(() => console.log('Teste'))));

f1(a1 => a1 = f2( a2 => a2 = f3( a3 => a3 = console.log('Outro tipo de Arrow'))));
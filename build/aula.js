"use strict";
function soma(...n) {
    let soma = 0;
    for (let e of n) {
        soma += e;
    }
    return soma;
}
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9));

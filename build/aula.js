"use strict";
const teste = (text) => {
    console.log(text);
};
teste('Olá Mundo');
teste('Hello World');
teste();
const soma = (n) => {
    let somar = 0;
    n.forEach((e) => {
        somar += e;
    });
    return somar;
};
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(soma(numeros));

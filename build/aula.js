"use strict";
function teste(valor, r) {
    return r;
}
console.log(teste(12, 'Olá'));
console.log(teste('Olá mundo', 10));
console.log(teste(true, false));
class ClassTeste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const classTeste01 = new ClassTeste(10);
const classTeste02 = new ClassTeste('Olá mundo');
console.log(classTeste01.valor);
console.log(classTeste02.valor);

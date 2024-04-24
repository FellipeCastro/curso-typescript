"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const conta01 = new ContaPF(123, 'Fellipe');
const conta02 = new ContaPJ(456, 'João');
console.log(conta01);
console.log(conta02);

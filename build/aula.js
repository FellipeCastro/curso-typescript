"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    CPF;
    constructor(titular, cpf) {
        super(titular);
        this.CPF = cpf;
    }
}
class ContaPJ extends Conta {
    CNPJ;
    constructor(titular, cnpj) {
        super(titular);
        this.CNPJ = cnpj;
    }
}
const conta01 = new ContaPF('Fellipe', 12345678900);
const conta02 = new ContaPJ('João', 12345678900);
console.log(conta01);
console.log(conta02);

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
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número:  ${this.numero}`);
        console.log('');
    }
}
class ContaPF extends Conta {
    CPF;
    constructor(titular, cpf) {
        super(titular);
        this.CPF = cpf;
        console.log(`Conta PF criada: ${titular}`);
    }
}
class ContaPJ extends Conta {
    CNPJ;
    constructor(titular, cnpj) {
        super(titular);
        this.CNPJ = cnpj;
        console.log(`Conta PJ criada: ${titular}`);
    }
}
const conta01 = new ContaPF('Fellipe', 12345678900);
const conta02 = new ContaPJ('João', 12345678900);
conta01.info();
conta02.info();

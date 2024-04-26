"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número:  ${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log('Saldo insuficiente');
        }
    }
}
class ContaPF extends Conta {
    CPF;
    constructor(titular, cpf) {
        super(titular);
        this.CPF = cpf;
    }
    info() {
        console.log('');
        console.log(`Topo: Pessoa Física`);
        super.info();
        console.log(`CPF: ${this.CPF}`);
    }
    deposito(valor) {
        if (valor <= 1000) {
            super.deposito(valor);
        }
        else {
            console.log('Valor de deposito muito alto para uma conta PF');
        }
    }
}
class ContaPJ extends Conta {
    CNPJ;
    constructor(titular, cnpj) {
        super(titular);
        this.CNPJ = cnpj;
    }
    info() {
        console.log('');
        console.log(`Topo: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ: ${this.CNPJ}`);
    }
    deposito(valor) {
        if (valor <= 10000) {
            super.deposito(valor);
        }
        else {
            console.log('Valor de deposito muito alto para uma conta PJ');
        }
    }
}
const conta01 = new ContaPF('Fellipe', 12345678900);
const conta02 = new ContaPJ('João', 12345678900);
conta01.deposito(1000);
console.log(conta01.saldo());
conta02.deposito(10001);
console.log(conta02.saldo());

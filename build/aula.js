"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome   : ${this.nome}`);
        console.log(`RAM    : ${this.ram}`);
        console.log(`CPU    : ${this.cpu}`);
        console.log(`Ligado : ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upgradeRam(valor) {
        if (valor >= 0 && valor <= 1000) {
            this.ram = valor;
        }
        else {
            console.log('Valor de memória RAM inválido');
        }
    }
    upgradeCpu(valor) {
        if (valor >= 0 && valor <= 1000) {
            this.cpu = valor;
        }
        else {
            console.log('Valor de CPU inválido');
        }
    }
}
const comp1 = new Computador('Computador 01', 8, 12);
const comp2 = new Computador('Computador 02', 4, 6);
const comp3 = new Computador('Computador 03', 16, 25);
comp1.ligar();
comp3.ligar();
comp3.desligar();
comp2.upgradeRam(64);
comp1.info();
comp2.info();
comp3.info();

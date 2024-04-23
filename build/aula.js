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
        console.log('Novo computador criado');
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
}
const comp1 = new Computador('Computador 01', 8, 12);
const comp2 = new Computador('Computador 02', 4, 6);
const comp3 = new Computador('Computador 03', 16, 25);
comp1.ligar();
comp3.ligar();
comp3.desligar();
comp1.info();
comp2.info();
comp3.info();

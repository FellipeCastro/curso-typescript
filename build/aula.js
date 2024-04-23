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
}
const comp1 = new Computador('Computador 01', 8, 12);
const comp2 = new Computador('Computador 02', 4, 6);
const comp3 = new Computador('Computador 03', 16, 25);
console.log(comp1);
console.log(comp2);
console.log(comp3);

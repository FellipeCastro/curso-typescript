"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(100);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
    }
    class Motor {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro01 = new Veiculos.Carro('Rapidão');
console.log(carro01.nome);
console.log(carro01.motor);

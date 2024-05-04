"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
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
        get getPotencia() {
            return this.potencia;
        }
    }
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(cilindros, potencia, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.potencia = potencia + (turbo ? turbo.getPotencia : 0);
        }
        set ligar(ligado) {
            this.ligado = ligado;
        }
        get ligar() {
            return this.ligado;
        }
        get getPotencia() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));

"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.ligar = true;
        }
        desligar() {
            this.motor.ligar = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.ligar ? 'Sim' : 'Não');
        }
        get minhaPotencia() {
            return this.motor.getPotencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
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
    Motores.Turbo = Turbo;
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
const carro01 = new Veiculos.CarroEsportivo('Rapidão', 2);
const carro02 = new Veiculos.CarroPopular('Popular', 4);
carro01.ligar();
console.log('');
console.log(`Nome:     ${carro01.meuNome}`);
console.log(`Cor:      ${carro01.minhaCor}`);
console.log(`Potencia: ${carro01.minhaPotencia}`);
console.log(`Ligado:   ${carro01.estouLigado}`);
console.log('');
console.log(`Nome:     ${carro02.meuNome}`);
console.log(`Cor:      ${carro02.minhaCor}`);
console.log(`Potencia: ${carro02.minhaPotencia}`);
console.log(`Ligado:   ${carro02.estouLigado}`);

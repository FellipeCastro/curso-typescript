// namespace é usado para separar um certo tipo de classes
namespace Veiculos {
    enum Cores{'Preto', 'Branco', 'Vermelho', 'Amarelo', 'Azul', 'Prata'}

    abstract class Carro { // export para permitir que a classe seja usada fora do namespace
         private nome: string
         private motor: Motores.Motor
         private cor: String

        constructor(nome: string, motor:Motores.Motor, cor: Cores) {
            this.nome = nome
            this.motor = motor
            this.cor = Cores[cor]
        }

        public ligar() {
            this.motor.ligar = true
        }

        public desligar() {
            this.motor.ligar = false
        }

        get minhaCor() {
            return this.cor
        }

        get meuNome() {
            return this.nome
        }

        get estouLigado() {
            return (this.motor.ligar ? 'Sim' : 'Não')
        }

        get minhaPotencia() {
            return this.motor.getPotencia
        }
    }
    
    export class CarroEsportivo extends Carro {
        constructor(nome:string, cor:Cores) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor) // criando um carro com turbo, ouseja, a potencia sera maior
        }
    }

    export class CarroPopular extends Carro {
        constructor(nome:string, cor:Cores) {
            super(nome, new Motores.Motor(3, 100), cor) // turbo é opcional, ou seja, o carro pode não ter
        }
    }
}

namespace Motores {
    export class Turbo {
        private potencia: number
    
        constructor(potencia: number) {
            this.potencia = potencia
        }

        get getPotencia() {
            return this.potencia
        }
    }
    
    export class Motor { // export para permitir que a classe seja usada fora do namespace
        private ligado: boolean
        private cilindros:number
        private potencia: number
    
        constructor(cilindros: number, potencia: number, turbo?: Turbo) {
            this.ligado = false
            this.cilindros = cilindros
            this.potencia = potencia + (turbo ? turbo.getPotencia : 0)
        }

        set ligar(ligado: boolean) {
            this.ligado = ligado
        }

        get ligar() {
            return this.ligado
        }

        get getPotencia() {
            return this.potencia
        }
    }
}

const carro01 = new Veiculos.CarroEsportivo('Rapidão', 2)
const carro02 = new Veiculos.CarroPopular('Popular', 4)

carro01.ligar()

console.log('')
console.log(`Nome:     ${carro01.meuNome}`)
console.log(`Cor:      ${carro01.minhaCor}`)
console.log(`Potencia: ${carro01.minhaPotencia}`)
console.log(`Ligado:   ${carro01.estouLigado}`)

console.log('')
console.log(`Nome:     ${carro02.meuNome}`)
console.log(`Cor:      ${carro02.minhaCor}`)
console.log(`Potencia: ${carro02.minhaPotencia}`)
console.log(`Ligado:   ${carro02.estouLigado}`)

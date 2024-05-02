namespace Veiculos {
    export class Carro { // export para permitir que a classe seja usada fora do namespace
        nome: string
        motor: Motores.Motor
    
        constructor(nome: string) {
            this.nome = nome
            this.motor = new Motores.Motor(100)
        }
    }    
}

namespace Motores {
    class Turbo {
        potencia: number
    
        constructor(potencia: number) {
            this.potencia = potencia
        }
    }
    
    export class Motor { // export para permitir que a classe seja usada fora do namespace
        potencia: number
    
        constructor(potencia: number) {
            this.potencia = potencia
        }
    }    
}

const carro01 = new Veiculos.Carro('Rapidão')
console.log(carro01.nome)
console.log(carro01.motor)

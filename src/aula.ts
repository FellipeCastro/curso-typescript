// namespace é usado para separar um certo tipo de classes
namespace Veiculos {
    export class Carro { // export para permitir que a classe seja usada fora do namespace
        nome: string
        motor: Motores.Motor
    
        constructor(nome: string) {
            this.nome = nome
            this.motor = new Motores.Motor(3, 100)
        }
    }    
}

namespace Motores {
    class Turbo {
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

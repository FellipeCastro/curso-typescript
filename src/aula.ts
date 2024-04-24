class Computador {
    nome: string
    private ram: number // propriedade privada/não pode ser modificada fora da classe
    private cpu: number // propriedade privada/não pode ser modificada fora da classe
    protected ligado: boolean // propriedade não pode ser modificada fora da classe, apenas por classes filhas

    // Método(função de uma classe) que será chamado sempre que a classe for instanciada
    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome // o this se refere a classe
        this.ram = ram
        this.cpu = cpu
        this.ligado = false
    }

    info(): void {
        console.log(`Nome   : ${this.nome}`)
        console.log(`RAM    : ${this.ram}`)
        console.log(`CPU    : ${this.cpu}`)
        console.log(`Ligado : ${this.ligado ? 'Sim' : 'Não'}`)
        console.log('')
    }

    ligar(): void {
        this.ligado = true
    }

    desligar(): void {
        this.ligado = false
    }

    upgradeRam(valor: number): void {
        if (valor >= 0 && valor <= 1000) {
            this.ram = valor
        } else {
            console.log('Valor de memória RAM inválido')
        }
    }

    upgradeCpu(valor: number): void {
        if (valor >= 0 && valor <= 1000) {
            this.cpu = valor
        } else {
            console.log('Valor de CPU inválido')
        }
    }
}

// Instanciar/criar objeto da classe
const comp1 = new Computador('Computador 01', 8, 12)
const comp2 = new Computador('Computador 02', 4, 6)
const comp3 = new Computador('Computador 03', 16, 25)

comp1.ligar()
comp3.ligar()

comp3.desligar()

comp2.upgradeRam(64)

comp1.info()
comp2.info()
comp3.info()

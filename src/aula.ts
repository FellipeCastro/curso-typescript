class Computador{
    nome: string
    ram: number
    cpu: number
    ligado: boolean

    // Método(função de uma classe) que será chamado sempre que a classe for instanciada
    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome // o this se refere a classe
        this.ram = ram
        this.cpu = cpu
        this.ligado = false
        console.log('Novo computador criado')
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
}

// Instanciar/criar objeto da classe
const comp1 = new Computador('Computador 01', 8, 12)
const comp2 = new Computador('Computador 02', 4, 6)
const comp3 = new Computador('Computador 03', 16, 25)

comp1.ligar()
comp3.ligar()

comp3.desligar()

comp1.info()
comp2.info()
comp3.info()

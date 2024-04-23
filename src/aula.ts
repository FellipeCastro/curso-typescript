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
}

// Instanciar/criar objeto da classe
const comp1 = new Computador('Computador 01', 8, 12)
const comp2 = new Computador('Computador 02', 4, 6)
const comp3 = new Computador('Computador 03', 16, 25)

console.log(comp1)
console.log(comp2)
console.log(comp3)

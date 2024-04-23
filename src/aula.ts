class Computador{
    nome: string = ''
    ram: number = 0
    cpu: number = 0
    ligado: boolean = false
}

const comp1 = new Computador()
const comp2 = new Computador()
const comp3 = new Computador()

comp1.nome = 'Computador 01'
comp2.nome = 'Computador 02'
comp3.nome = 'Computador 03'

console.log(comp1.nome)
console.log(comp2.nome)
console.log(comp3.nome)

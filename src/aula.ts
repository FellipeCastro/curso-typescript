// enum numerico
enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6,
}

console.log(dias.domingo)
console.log(dias['segunda'])
console.log(dias[3])

const dia = new Date()
console.log(dia.getDay())

console.log(dias[dia.getDay()])

// enum textual
enum cores {
    branco = '#fff',
    preto = '#000',
    vermelho = '#f00',
    verde = '#0f0',
    azul = '#00f',
}

console.log(cores.branco)
console.log(cores['verde'])

enum tipoUsuario {
    user,
    admin,
    super
}

console.log(tipoUsuario.super)

// usando enum como tipo
const tipo: tipoUsuario = 1
const tipo2: tipoUsuario = tipoUsuario.admin

let coisas: [string, number, boolean] = ['Fellipe', 16, true]

// não é possível acessar esse novos valores
coisas.push('João', 18, false)

coisas[2] = false

console.log(coisas)
console.log(coisas[2])

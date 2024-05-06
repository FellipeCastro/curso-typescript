let valores = [10, 20, 30, 40]

// let a, b, c, d
// a = valores[0]
// b = valores[1]
// c = valores[2]
// d = valores[3]

// let [a, b, c, d] = valores
// let [a, b, c, d] = [10, 20, 30, 40]

const obj = {
    cor01: 'Verde',
    cor02: 'Amarelo',
    cor03: 'Azul',
    cor04: 'Vermelho',
}

let {cor01, cor02, cor03, cor04} = obj

let [n1 = 0, n2 = 0, ...n3] = [10, 20, 30, 40, 50, 60, 70, 80, 90] // n3 recebeu um array com o resto dos valores

const carros = () => {
    return ['Uno', 'Gol', 'Fusca', 'Corsa']
}

let [carro01, carro02, carro03, carro04] = carros()

let texto = 'Curso de Typescript'
let [...t] = texto.split(' ')
let [p1, p2, p3] = texto.split(' ')

console.log(t)
console.log(p1)
console.log(p2)
console.log(p3)

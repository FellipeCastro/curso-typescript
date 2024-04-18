let numeros: number[] = [10, 20, 30, 40]
// let numeros: Array<number|string> = [10, 'Pedro', 30, 40, 'João']
// let numeros: (number|string)[] = [10, 'Pedro', 30, 40, 'João']

numeros.push(50) // final do array
numeros.unshift(100) // começo do array
numeros.pop() // retira o ultimo valor do array
numeros.shift() //retira o primeiro valor do array

console.log(numeros)

let numerosRo: ReadonlyArray<number> = [100, 200, 300] // array que so aceita leitura, não pode ser modificado
console.log(numerosRo)

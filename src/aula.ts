let valorNumber: number
let valorString: string
let valorUnknown: unknown

valorUnknown = 10
valorString = '20'
valorNumber= 10

valorString = valorNumber.toString()

console.log(typeof(valorString))
console.log(valorString)

// valorNumber = Number.parseInt(valorString)

// valorNumber = <number><unknown>valorString

// afirmando o tipo
// valorNumber = <number>valorUnknown
// valorString = <string>valorUnknown

// console.log(typeof(valorUnknown))
// console.log(valorUnknown)

// console.log(typeof(valorNumber))
// console.log(valorNumber)

// console.log(typeof(valorString))
// console.log(valorString)

// null = nulo != vazio
let nome: string|null
nome = null
console.log(nome)

// undefined = indefinido/não tem valor
let nome2
console.log(nome2)

// unknown = desconhecido/pode receber qualquer valor. So pode ser atribuido em tipos unknown ou any 
let nome3: unknown = 1
// let num: number = nome3 // erro pois num e di tipo number
let num: any = nome3
console.log(nome3)

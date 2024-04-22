// Função pádrao pode ser chamada antes da sua criação 

// teste()

// function teste(): void {
//     console.log('teste')
// }

// Arrow funcion pode ser chamada antes da sua criação 

// const teste = (): void => {
//     console.log('teste')
// }

// teste()

const teste = (text? : string): void => {
    console.log(text)
}

teste('Olá Mundo')
teste('Hello World')
teste()

const soma = (n: number[]): number => {
    let somar: number = 0
    n.forEach((e) => {
        somar += e
    })
    
    return somar
}

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(soma(numeros))

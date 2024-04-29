function teste<T, U>(valor: T, r: U): U {
    return r
}

console.log(teste<number, string>(12, 'Olá'))
console.log(teste<string, number>('Olá mundo', 10))
console.log(teste<boolean, boolean>(true, false))

class ClassTeste<T> {
    public valor: T

    constructor(valor: T) {
        this.valor = valor
    }
}

const classTeste01 = new ClassTeste<number>(10)
const classTeste02 = new ClassTeste<string>('Olá mundo')

console.log(classTeste01.valor)
console.log(classTeste02.valor)

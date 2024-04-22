function logar(user: string, password: string): void { // função não retorna nada: void
    console.log(`Usuário: ${user}`)
    console.log(`Senha: ${password}`)
}

logar('Fellipe', '1234')

function soma(n1: number, n2: number): number { // retorna number
    let res = n1 + n2
    
    return res
}

const respostaNumber: number = soma(1, 2)
const respostaString: string = soma(3, 9).toString()

console.log(respostaNumber)
console.log(respostaString)

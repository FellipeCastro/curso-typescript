function soma(n1: number = 0, n2: number = 0): number { // valores padrão: = X
    return n1 + n2
}

console.log(soma())

function novoUser(user: string, password: string, name? : string): void { // valor opcional: ?
    let dados = {user, password, name}

    console.log(dados)
}

novoUser('fellipe_123', '1234')

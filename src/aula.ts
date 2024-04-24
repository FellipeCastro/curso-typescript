// herança é uma classe que herda caracteristicas de outras 

class Conta {
    public numero: number
    public titular: string

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
    }

    gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000) + 1
    }
}

class ContaPF extends Conta {
    CPF: number

    constructor(titular: string, cpf: number) {
        super(titular) // se refere a classe pai, com os parametros dela
        this.CPF = cpf
    }
}

class ContaPJ extends Conta {
    CNPJ: number

    constructor(titular: string, cnpj: number) {
        super(titular) // se refere a classe pai, com os parametros dela
        this.CNPJ = cnpj
    }
}

const conta01 = new ContaPF('Fellipe', 12345678900)
const conta02 = new ContaPJ('João', 12345678900)

console.log(conta01)
console.log(conta02)

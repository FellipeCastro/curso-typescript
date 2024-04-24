// herança é uma classe que herda caracteristicas de outras 

class Conta {
    protected numero: number // permitir acesso a classes filhas
    protected titular: string // permitir acesso a classes filhas

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
    }

    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000) + 1
    }

    info(): void {
        console.log(`Titular: ${this.titular}`)
        console.log(`Número:  ${this.numero}`)
        console.log('')
    }
}

class ContaPF extends Conta {
    CPF: number

    constructor(titular: string, cpf: number) {
        super(titular) // se refere a classe pai, com os parametros dela
        this.CPF = cpf
        console.log(`Conta PF criada: ${titular}`)
    }
}

class ContaPJ extends Conta {
    CNPJ: number

    constructor(titular: string, cnpj: number) {
        super(titular) // se refere a classe pai, com os parametros dela
        this.CNPJ = cnpj
        console.log(`Conta PJ criada: ${titular}`)
    }
}

const conta01 = new ContaPF('Fellipe', 12345678900)
const conta02 = new ContaPJ('João', 12345678900)

conta01.info()
conta02.info()

// herança é uma classe que herda caracteristicas de outras 

// Setter = alterar valores
// Getter = obter valor

abstract class Conta { // classe abstrata, não e possivel instanciar um objeto da classe conta, apenas contaPF ou contaPj. É uma classe base para outras
    private readonly numero: number // alteração não permitida, apenas leitura
    protected titular: string // permitir acesso a classes filhas
    private saldoConta: number

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldoConta = 0
    }

    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000) + 1
    }

    protected info(): void {
        console.log(`Titular: ${this.titular}`)
        console.log(`Número:  ${this.numero}`)
    }

    get saldo(): number { // transforma o resultado em uma propriedade
        return this.saldoConta
    }

    set saldo(sladoConta: number) { // trasforma saldo em uma variavel, podendo mudar seu valor
        this.saldoConta = this.saldoConta
    }

    protected deposito(valor: number): void {
        if (valor < 0) {
            console.log('Valor inválido')
        } else {
            this.saldoConta += valor
        }        
    }

    protected saque(valor: number): void {
        if (valor < 0) {
            console.log('Valor inválido')
        } else if (valor <= this.saldoConta) {
            this.saldoConta -= valor
        } else {
            console.log('Saldo insuficiente')
        }
    }
}

class ContaPF extends Conta {
    CPF: number

    constructor(titular: string, cpf: number) {
        super(titular) // se refere a classe pai, com os parametros dela
        this.CPF = cpf
    }

    info(): void{
        console.log('')
        console.log(`Topo: Pessoa Física`)
        super.info() // chamando o info() da classe pai
        console.log(`CPF: ${this.CPF}`) // adicionando o CPF ao info()
    }

    public deposito(valor: number): void {
        if (valor <= 1000) {
            super.deposito(valor)
        } else {
            console.log('Valor de deposito muito alto para uma conta PF')
        }        
    }

    public saque(valor: number): void {
        if (valor <= 1000) {
            super.saque(valor)
        } else {
            console.log('Valor de saque muito alto para uma conta PF')
        }
    }
}

class ContaPJ extends Conta {
    CNPJ: number

    constructor(titular: string, cnpj: number) {
        super(titular) // se refere a classe pai, com os parametros dela
        this.CNPJ = cnpj
    }

    info(): void {
        console.log('')
        console.log(`Topo: Pessoa Jurídica`)
        super.info() // chamando o info() da classe pai
        console.log(`CNPJ: ${this.CNPJ}`) // adicionando o CNPJ ao info()
    }

    public deposito(valor: number): void {
        if (valor <= 10000) {
            super.deposito(valor)
        } else {
            console.log('Valor de deposito muito alto para uma conta PJ')
        }        
    }

    public saque(valor: number): void {
        if (valor <= 10000) {
            super.saque(valor)
        } else {
            console.log('Valor de saque muito alto para uma conta PJ')
        }
    }
}

const conta01 = new ContaPF('Fellipe', 12345678900)
const conta02 = new ContaPJ('João', 12345678900)

conta01.deposito(900)
// conta01.saque(700)
// conta01.saldo = 250 // o valor de saldo pode ser alterado
console.log(conta01.saldo) // saldo agora é uma propriedade

// conta02.deposito(10001)
// console.log(conta02.saldo())

// conta01.info()
// conta02.info()

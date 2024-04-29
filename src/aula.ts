interface curso {
    titulo: string
    descricao: string
    aula: number 
    maxAlunos?: number // deixando essa opção opcional
}

let curso01: curso
let curso02: curso
let curso03: curso

curso01 = {
    titulo: 'Typescript',
    descricao: 'Curso de Typescript',
    aula: 100, 
    maxAlunos: 50
}

curso02 = {
    titulo: 'Javascript',
    descricao: 'Curso de Javascript',
    aula: 200,
    maxAlunos: 80
}

curso03 = {
    titulo: 'C++',
    descricao: 'Curso de C++',
    aula: 170
}

console.log(curso01)
console.log(curso02)
console.log(curso03)

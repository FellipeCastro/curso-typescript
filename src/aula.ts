let cursos: string[] = ['Javascript', 'Typescript', 'React']
cursos.push('Node')
console.log(cursos)

let valores: number[] = [10, 20, 30]
valores.push(40)
console.log(valores)

// let teste: string | number
let teste: any
teste = 'Fellipe'
teste = 10
teste = cursos
console.log(teste)

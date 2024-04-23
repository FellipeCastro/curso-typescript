function soma(...n: number[]): number {
    let soma: number = 0

    for (let e of n) {
        soma += e
    }

    // n.forEach((e) => {
    //     soma += e
    // })
    
    return soma
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9))

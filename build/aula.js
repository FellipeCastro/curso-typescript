"use strict";
function logar(user, password) {
    console.log(`Usuário: ${user}`);
    console.log(`Senha: ${password}`);
}
logar('Fellipe', '1234');
function soma(n1, n2) {
    let res = n1 + n2;
    return res;
}
const respostaNumber = soma(1, 2);
const respostaString = soma(3, 9).toString();
console.log(respostaNumber);
console.log(respostaString);

"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma());
function novoUser(user, password, name) {
    let dados = { user, password, name };
    console.log(dados);
}
novoUser('fellipe_123', '1234');

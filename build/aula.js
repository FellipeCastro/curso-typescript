"use strict";
let dados = {
    nome: 'Fellipe',
    idade: 16,
    status: 'A',
    ola: () => { console.log('Olá Mundo'); },
    info: (nome) => { console.log(nome); }
};
console.log(typeof (dados));
console.log(dados);
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);

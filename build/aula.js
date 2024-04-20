"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias['segunda']);
console.log(dias[3]);
const dia = new Date();
console.log(dia.getDay());
console.log(dias[dia.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['verde']);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["user"] = 0] = "user";
    tipoUsuario[tipoUsuario["admin"] = 1] = "admin";
    tipoUsuario[tipoUsuario["super"] = 2] = "super";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.super);
const tipo = 1;
const tipo2 = tipoUsuario.admin;

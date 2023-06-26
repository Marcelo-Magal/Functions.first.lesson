// 1 - Crie um algoritmo que solicite ao seu usuário dois números A e B.

var numeroA = parseInt(prompt("Qual é o número A?"));
var numeroB = parseInt(prompt("Qual é o número B?"));

//2 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma soma com eles, e retorne o resultado;

function SomarNumeros() {
    var soma = (numeroA + numeroB);
    return soma;
}
console.log(SomarNumeros());

//3 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma subtração com eles, e retorne o resultado;

function SubtrairNumeros() {
    var subtracao = (numeroA - numeroB);
    return subtracao;
}
console.log(SubtrairNumeros());

//4 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma multiplicação com eles, e retorne o resultado;

function MultiplicarNumeros() {
    var multiplicacao = (numeroA * numeroB);
    return multiplicacao;
}
console.log(MultiplicarNumeros());

//5 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma divisão com eles, e retorne o resultado;

function DividirNumeros() {
    var divisao = (numeroA / numeroB);
    return divisao;
}
console.log(DividirNumeros());


//6 - Faça com que seu usuário escolha qual função ele deseja fazer
// com os números que ele inseriu, e depois de realizar essa operação
// pergunte se ele deseja fazer outra ou encerrar a aplicação.
var continuar = true;
var contador = 0;
var resultado = [];

while (continuar) {
    var operacao = prompt("Digite a opção desejada: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão ");

    // 1 - Crie um algoritmo que solicite ao seu usuário dois números A e B.
    var numeroA = parseInt(prompt("Qual é o número A?"));
    var numeroB = parseInt(prompt("Qual é o número B?"));

    var resultadoDaOperacao;
    switch (operacao) {

        case "1":
            resultadoDaOperacao = SomarNumeros();
            break;

        case "2":
            resultadoDaOperacao = SubtrairNumeros();
            break;

        case "3":
            resultadoDaOperacao = MultiplicarNumeros();
            break;

        case "4":
            resultadoDaOperacao = DividirNumeros();
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
    
    resultado[contador] = resultadoDaOperacao;
    contador++
    //console.log("O resultado da operação é " + resultadoDaOperacao)
    var continuarOperacao =  prompt("Deseja realizar outra operação?")
        if (continuarOperacao.toUpperCase() === 'N' || continuarOperacao.toUpperCase() === 'NAO' || continuarOperacao.toUpperCase() === 'NÃO') {
        continuar = false;
    }  
}

function ExibirHistorico() {
    console.log("Histórico de resultados")
    for (var i = 0; i < resultado.length; i++) {
    console.log("Resultado " + (i + 1) + ": " + resultado[i]);
   }
}

ExibirHistorico();

//2 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma soma com eles, e retorne o resultado;

function SomarNumeros() {
    var soma = (numeroA + numeroB);
    return soma;
}

//3 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma subtração com eles, e retorne o resultado;

function SubtrairNumeros() {
    var subtracao = (numeroA - numeroB);
    return subtracao;
}

//4 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma multiplicação com eles, e retorne o resultado;

function MultiplicarNumeros() {
    var multiplicacao = (numeroA * numeroB);
    return multiplicacao;
}

//5 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma divisão com eles, e retorne o resultado;

function DividirNumeros() {
    var divisao = (numeroA / numeroB);
    return divisao;
}

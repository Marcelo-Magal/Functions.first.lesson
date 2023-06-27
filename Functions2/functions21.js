
let nome;
let salario;

PerguntarDados();



//1 - Crie uma função que pergunte o nome e o salário de um colaborador;
function PerguntarDados() {
    nome = prompt("Qual é o nome do colaborador?");
    salario =parseInt(prompt("Qual o salário desse colaborador?"));
}

//2 - Depois crie uma função que irá calcular o aumento de salário
// conforme a seguinte tabela:
//     - ATÉ R$1.500,00 : aumento de 20%
//     - R$1.501,00 até R$2.000,00 : aumento de 15%
//     - R$2.001,00 até R$3.000,00 : aumento de 10%
//     - R$3.001,00 em diante : aumento de 5%
//Essa função tem que receber dois parâmetros: o salário e a % de aumento.
// E retornar o valor do salário já com o aumento.

function CalcularAumento(nome, salario) {
    let aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2;
    }
    else if (salario > 1500 && salario <= 2000) {
        aumento = 0.15;
    }
    else if (salario > 2000 && salario <= 3000) {
        aumento = 0.1;
    }
    else {
        aumento = 0.05;
    }

    let novoSalario = salario + (salario * aumento);
}
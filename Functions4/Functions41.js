// Uma empresa comercial quer um programa para controlar o orçamento de seus projetos.
// 1 - Crie uma função para criar um projeto, essa função deve solicitar ao usuário
// o nome do projeto e o seu orçamento total.
let names = [];
let budgets = [];
let counter = 0;

CreateProject();
UpdateProject();

function CreateProject() {
    let name = prompt("Enter the project name:");
    let budget = parseInt(prompt("Enter the total budget for the project:"));

    names[counter] = name;
    budgets[counter] = budget;
    counter++;
}


// 2 - Crie também uma função que recebe 3 parâmetros:
// o nome do projeto
// um valor
// e o tipo de despesa (“R” - receita e “D” - despesa),
// uma receita deve ser somada ao saldo e uma despesa subtraída do saldo,
// seu código deve impedir uma despesa maior que o saldo disponível e no final
// exibir o saldo atual desse projeto.

function UpdateProject(name, budget, typeBudget) {
    typeBudget = prompt("Enter the type of budget (r for revenue, d for expense):");
    name = prompt("Enter the project name:");
    budget = parseInt(prompt("Enter budget for the update project:"));
    for (let i = 0; i < names.length; i++) {
        if (name == names[i]) {
            if (typeBudget == "r") {
                budgets[i] += budget;
            } else if (typeBudget  == "d" && budget > budgets[i]) {
                console.log("Insufficient funds for this expense")
            } else {
                budgets[i] -= budget;
            }
            console.log("The current budget for project " + names[i] +  "is " + budgets[i]);
        }
    }
}
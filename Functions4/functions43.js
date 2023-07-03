//3 - A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, 
//coletando dados sobre o salário e o número de filhos. A prefeitura deseja saber:
//           - A média do salário da população;
//
//           - A média do número de filhos;
//
//          - O maior salário;
//
//           - A porcentagem de pessoas com salários até R$1.500,00

//Salve os dados dos habitantes em arrays, crie uma função para cada item que retorna o que é pedido.
let salaries = [1500, 1200, 3200, 1800, 4000, 1300];
let childrens = [0, 1, 3, 2, 1, 0];
let counter = 0;

console.log(CalculateAverageSalary(salaries));
console.log(CalculateAverageNumberChildren(childrens));
console.log(FindHighestSalary(salaries));
console.log(CalculatePercentageSalaryUpTo1500(salaries));


// - A média do salário da população;
function CalculateAverageSalary(salaries) {
    let sumOfSalay = 0;
    
    for (let i = 0; i < salaries.length; i++) {
        sumOfSalay += salaries[i];
    }

    return sumOfSalay / salaries.length;
}

// - A média do número de filhos;
function CalculateAverageNumberChildren(childrens) {
    let sumOfChildren = 0;

    for (let i = 0; i < childrens.length; i++) {
        sumOfChildren += childrens[i];
    }

    return sumOfChildren / childrens.length
}

//// - O maior salário;
function FindHighestSalary(salaries) {
    let highestSalary = salaries[0];

    for (let i = 0; i < salaries.length; i++) {
        if (salaries[i] > highestSalary) {
            highestSalary = salaries[i];
        }
    }

    return highestSalary;
}

// - A porcentagem de pessoas com salários até R$1.500,00;
function CalculatePercentageSalaryUpTo1500(salaries) {
    let salariesUpTo1500 = 0;

    for (let i = 0; i < salaries.length; i++) {
        if (salaries[i] <= 1500) {
            salariesUpTo1500++;
        }
    }

    return ((salariesUpTo1500 / salaries.length) * 100 + "%");

}
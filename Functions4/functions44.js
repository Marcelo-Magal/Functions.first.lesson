//4 - Crie uma função que recebe 3 notas de um aluno como parâmetro e uma letra.
// Se a letra for A a função calcula a média aritmética das notas do aluno,
// se for P, a sua média ponderada (pesos: 5, 3 e 2).
//A média calculada deve ser retornada;


let notas = ReceberNotas();
console.log(CalcularMedias(notas[0], notas[1], notas[2], notas[3])); //spread operator

function ReceberNotas() {
    let nota1 = parseInt(prompt("Qual a primeira nota?"));
    let nota2 = parseInt(prompt("Qual a segunda nota?"));
    let nota3 = parseInt(prompt("Qual a terceira nota?"));
    let tipo = prompt("Qual o tipo de média?");
    return [nota1, nota2, nota3, tipo];
}

function CalcularMedias(nota1, nota2, nota3, tipo) {
    if (tipo.toUpperCase() == "A") {
        return (nota1 + nota2 + nota3) / 3;
    } else {
        return ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10
    }
}


// ou


//let notas = ReceberNotas();
//console.log(CalcularMedias(...notas));       //como notas esta recebendo uma array, [nota1, nota2, nota3, tipo], 
//
//function ReceberNotas() {
//    let nota1 = parseInt(prompt("Qual a primeira nota?"));
//    let nota2 = parseInt(prompt("Qual a segunda nota?"));
//    let nota3 = parseInt(prompt("Qual a terceira nota?"));
//    let tipo = prompt("Qual o tipo de média?");
//    return [nota1, nota2, nota3, tipo];
//}
//
//function CalcularMedias(nota1, nota2, nota3, tipo) {
//    if (tipo.toUpperCase() == "A") {
//        return (nota1 + nota2 + nota3) / 3;
//    } else {
//        return ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10
//    }
//}

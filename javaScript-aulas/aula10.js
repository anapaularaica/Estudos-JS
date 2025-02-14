// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios 
// O salário a ser transferido é calculado da seguinte maneira :

//  valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios 

// Para calcular o percentual de imposto segue as aliquotas :

//      De R$ 0.00 a R$ 1100.00 = 5.00%
//      De R$ 1100.01 a R$ 2500.00 = 10.00%
//      Maior que  R$ 2500.00 = 15.00%
  
//         Exemplo :
//              Entrada :
//                  2000
//                  250

//              Saída :
//                  2050.00

function calcularSalarioTransferido(salarioBruto, adicionalBeneficios) {
    let percentualImposto;

    // Determina o percentual de imposto com base na faixa salarial
    if (salarioBruto <= 1100.00) {
        percentualImposto = 0.05; // 5%
    } else if (salarioBruto <= 2500.00) {
        percentualImposto = 0.10; // 10%
    } else {
        percentualImposto = 0.15; // 15%
    }

    // Calcula o valor do imposto
    const valorImposto = salarioBruto * percentualImposto;

    // Calcula o salário líquido a ser transferido
    const salarioTransferido = salarioBruto - valorImposto + adicionalBeneficios;

    // Retorna o resultado formatado para duas casas decimais
    return salarioTransferido.toFixed(2);
}

// Exemplo de uso:
const salarioBruto = 2000;
const adicionalBeneficios = 250;
const salarioTransferido = calcularSalarioTransferido(salarioBruto, adicionalBeneficios);

console.log(`Salário a ser transferido: R$ ${salarioTransferido}`);

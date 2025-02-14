
const peso = 45;
const altura = 1.55;
const imc = peso / Math.pow(altura, 2);
console.log(imc);


if (imc < 18.5) {
    console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso'); 
} else if (imc >= 30 && imc <40) {
    console.log ('Obeso')
}else 
console.log ('Obessidade Grave')
const precoCombustivel = 7.50
const kmPorLitro = 9
const distanciaKm = 120


const totalCombustivel = distanciaKm / kmPorLitro; 
const custoViagem = totalCombustivel *  precoCombustivel


console.log (custoViagem.toFixed(2));

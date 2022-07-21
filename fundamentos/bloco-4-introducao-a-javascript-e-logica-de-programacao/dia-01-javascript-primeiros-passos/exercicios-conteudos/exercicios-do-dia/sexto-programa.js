//retorna maior entre 3 números
const primeiroValor = 5;
const segundoValor = 55;
const terceiroValor = 22;
let resultado = primeiroValor;

if (segundoValor > resultado){
    resultado = "o "+segundoValor+" é o maior!";
}else if (terceiroValor > resultado){
    resultado = "o "+terceiroValor+" é o maior!";
}else {
    resultado = "o "+primeiroValor+" é o maior!";
}
console.log(resultado);
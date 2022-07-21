// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar
// Caso contrário, ele retorna false.

const numeroUm = 40;
const numeroDois = 24;
const numeroTres = 44;

if (numeroUm%2 != 0 || numeroDois%2 != 0 || numeroTres%2 != 0)
{
    console.log(true)
}else{console.log(false)}
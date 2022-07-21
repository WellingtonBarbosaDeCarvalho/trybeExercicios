// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
//em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor 
// que 0 ou maior que 100.


let notaPassada = 154;

if (notaPassada >= 90 & notaPassada < 100){
    console.log('Nota: A')
}else if (notaPassada >= 80 & notaPassada < 90){
    console.log('Nota: B')
}else if (notaPassada >= 70 & notaPassada < 80){
    console.log('Nota: C')
}else if(notaPassada >=60 & notaPassada < 70){
    console.log('Nota: D')
}else if (notaPassada >=50 & notaPassada < 60){
    console.log('Nota: E')
}else if(notaPassada < 50){
    console.log('Nota: F')
}else {
    console.log('Infelizmente não conseguimos determinar a sua nota :/')
}
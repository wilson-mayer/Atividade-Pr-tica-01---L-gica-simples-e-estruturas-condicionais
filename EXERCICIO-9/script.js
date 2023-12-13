// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


let quantidade = Number(prompt("Insira a quantidade desejada:"))
let valor1 = quantidade * 0.30
let valor2 = quantidade * 0.25

if (quantidade < 12) {
    console.log(valor1);
    
} else {
    console.log(valor2)
}
    



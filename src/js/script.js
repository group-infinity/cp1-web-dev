// Questão 3 - Miguel
console.log("QUESTÃO 3")
let peso = 60;
let altura = 1.80;
const imc = (peso / (altura * altura));

switch (true) {
    case (imc < 18.5):
        console.log(`Seu IMC é de ${imc.toFixed(2)}, Você está abaixo do peso.`);
        break;
    case (imc <= 24.9):
        console.log(`Seu IMC é de ${imc.toFixed(2)}, Você está no peso ideal.`);
        break;
    case (imc >= 25):
        console.log(`Seu IMC é de ${imc.toFixed(2)}, Você está acima do peso.`);
        break;
    default:
        console.log("Valor inválido");
}

console.log("----------------------------------------------------");

//Questão 4 - Diogo
console.log("QUESTÃO 4")
for(let i=1;i<=50;i++){
    console.log('O valor é:', i); }

console.log("----------------------------------------------------");

//Questão 9 - Diogo
console.log("QUESTÃO 9")
let string = "123.456";
let valor = parseFloat(string);
console.log(valor);
console.log(typeof valor);

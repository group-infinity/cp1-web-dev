//Questão 2 - Luara
//OPERADORES DE COMPARAÇÃO
const vBrancop = '$250.00';
const vTintop = '$350.00';

// Convertendo para número 
const precoBranco = parseFloat(vBrancop.replace('$', ''));
const precoTinto = parseFloat(vTintop.replace('$', ''));

console.log(precoBranco == precoTinto);   // false, pois compara e nao sao iguais os precos
console.log(precoBranco >= precoTinto);   // false, poisele não é maior nem igual
console.log(precoBranco != precoTinto);   // true, pois sao diferentes os precos


console.log("----------------------------------------------------");


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

// Questão 8 - Miguel
console.log("QUESTÃO 8")
const frase = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas."

console.log("1) Primeira posição de 'em':", frase.indexOf("em"));
console.log("2) Última posição de 'ia':", frase.lastIndexOf("ia"));

const indiceCiencia = frase.indexOf("ciência");
console.log(`3) ${frase.slice(indiceCiencia, indiceCiencia + "ciência".length)}`);

const indiceMetodos = frase.indexOf("métodos");
console.log(`4) ${frase.slice(indiceMetodos, indiceMetodos + "métodos".length)}`);

console.log("----------------------------------------------------");

//Questão 9 - Diogo
console.log("QUESTÃO 9")
let string = "123.456";
let valor = parseFloat(string);
console.log(valor);
console.log(typeof valor);

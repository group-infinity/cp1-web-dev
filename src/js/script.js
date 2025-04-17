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
let notaVinho = 92; // Altere a nota para testar outras faixas
let classificacao;

switch (true) {
  case (notaVinho < 85):
    classificacao = "Comum";
    break;
  case (notaVinho >= 85 && notaVinho <= 89):
    classificacao = "Bom";
    break;
  case (notaVinho >= 90 && notaVinho <= 94):
    classificacao = "Excelente";
    break;
  case (notaVinho >= 95):
    classificacao = "Premium";
    break;
  default:
    classificacao = "Nota inválida";
}

console.log(`Nota do vinho: ${notaVinho} → Classificação: ${classificacao}`);

console.log("----------------------------------------------------");

//Questão 4 - Diogo
console.log("QUESTÃO 4")
for(let i=1;i<=50;i++){
    console.log(`${i}: Conheça os vinhos especiais da Vinheria Agnello!`);
}

console.log("----------------------------------------------------");

// Questão 8 - Miguel
console.log("QUESTÃO 8")
const frase = "A vinheria é uma arte que envolve tradição, história e muita paixão pela produção de vinhos de qualidade."

console.log("1) Primeira posição de 'ar':", frase.indexOf("ar"));
console.log("2) Última posição de 'ia':", frase.lastIndexOf("ia"));

const indicePaixao = frase.indexOf("paixão");
console.log(`3) ${frase.slice(indicePaixao, indicePaixao + "paixão".length)}`);

const indiceVinhos = frase.indexOf("vinhos");
console.log(`4) ${frase.slice(indiceVinhos, indiceVinhos + "vinhos".length)}`);

console.log("----------------------------------------------------");

//Questão 9 - Diogo
console.log("QUESTÃO 9")
let precoVinho = "89.90";
let precoConvertido = parseFloat(precoVinho);
console.log("Antes da conversão:", precoVinho, "| Tipo:", typeof precoVinho);
console.log("Depois da conversão:", precoConvertido, "| Tipo:", typeof precoConvertido);

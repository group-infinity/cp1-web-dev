function questao1() {
  const res = document.querySelector("#q1 .resposta");
  let tipoUva;
  let comentario = "";
  let saudacao = "Bem-vindo à Vinheria Agnello!";
  let texto = `Tipo da uva: ${tipoUva}\n`;
  texto += `Comentário: '${comentario}'\n`;
  texto += `Mensagem: ${saudacao}`;
  res.textContent = texto;
  console.log(texto)
}


function questao2() {
  const res = document.querySelector("#q2 .resposta");
  const precoBranco = 250.00;
  const precoTinto = 350.00;
  let texto = `precoBranco == precoTinto: ${precoBranco == precoTinto}\n`;
  texto += `precoBranco >= precoTinto: ${precoBranco >= precoTinto}\n`;
  texto += `precoBranco != precoTinto: ${precoBranco != precoTinto}`;
  res.textContent = texto;
  console.log(texto)
}

function questao3() {
  const res = document.querySelector("#q3 .resposta");
  const notaVinho = prompt("Digite a nota do vinho: ");
  let classificacao;
  switch (true) {
    case (notaVinho < 85): classificacao = "Comum"; break;
    case (notaVinho <= 89): classificacao = "Bom"; break;
    case (notaVinho <= 94): classificacao = "Excelente"; break;
    case (notaVinho >= 95): classificacao = "Premium"; break;
    default: classificacao = "Nota inválida";
  }
  res.textContent = `Nota do vinho: ${notaVinho} -> Classificação: ${classificacao}`;
  console.log(`Nota do vinho: ${notaVinho} -> Classificação: ${classificacao}`)
}

function questao4() {
  const res = document.querySelector("#q4 .resposta");
  let texto = "";
  for (let i = 1; i <= 50; i++) {
    texto += `${i}: Conheça os vinhos especiais da Vinheria Agnello!\n`;
  }
  res.textContent = texto;
  console.log(texto)
}

function questao5() {
  const usuarioCadastrado = "admin";
  const senhaCadastrada = "1234";
  const usuario = prompt("Digite o nome do usuario: ");
  const senha = prompt("Digite a senha cadastrada: ");
  if (usuario === usuarioCadastrado && senha === senhaCadastrada){
      alert("Login realizado com sucesso!");
  } else {
      alert("Falha na autenticação. Usuário ou Senha incorretos.");
  }
}

function questao6() {
  const res = document.querySelector("#q6 .resposta");
  let notas = [7, 6.5, 8, 5, 7, 6, 6.2];
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  let media = soma / notas.length;
  let status = media >= 6 ? "Apto a atuar em eventos da vinheria" : "Não apto. Reforce seus estudos sobre vinhos.";
  res.textContent = `Média final das avaliações: ${media.toFixed(2)}\nResultado: ${status}`;
  console.log(`Média final das avaliações: ${media.toFixed(2)}\nResultado: ${status}`)
}

function questao7() {
  const res = document.getElementById("info");
  let nome = "Ana Clara";
  let idade = 25;
  let curso = "Curso de Degustação e Harmonização de Vinhos";
  let ano = 2025;
  let texto = "";
  texto += "Nome do estudante: " + nome + "\n";
  texto += "Idade: " + idade + "\n";
  texto += "Curso matriculado: " + curso + "\n";
  texto += "Ano de ingresso: " + ano;
  res.textContent = texto;
  console.log(texto)
}

function questao8() {
  const res = document.querySelector("#q8 .resposta");
  const frase = "A vinheria é uma arte que envolve tradição, história e muita paixão pela produção de vinhos de qualidade.";
  let texto = `1) Primeira posição de 'ar': ${frase.indexOf("ar")}\n`;
  texto += `2) Última posição de 'ia': ${frase.lastIndexOf("ia")}\n`;
  texto += `3) Palavra extraída (paixão): ${frase.slice(frase.indexOf("paixão"), frase.indexOf("paixão") + 6)}\n`;
  texto += `4) Palavra extraída (vinhos): ${frase.slice(frase.indexOf("vinhos"), frase.indexOf("vinhos") + 6)}`;
  res.textContent = texto;
  console.log(texto)
}

function questao9() {
  const res = document.querySelector("#q9 .resposta");
  let precoVinho = "89.90";
  let precoConvertido = parseFloat(precoVinho);
  let texto = `Antes da conversão: ${precoVinho} | Tipo: ${typeof precoVinho}\n`;
  texto += `Depois da conversão: ${precoConvertido} | Tipo: ${typeof precoConvertido}`;
  res.textContent = texto;
  console.log(texto)
}

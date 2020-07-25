function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(4))

// Parâmetros e argumentos

// Ao criar uma funçaõ. você pode definir parâmetros.
// Ao executar  uma função, você pode passar argumentos.

function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(82, 1.80)) // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)) // 60 e 1.70 são os argumentos

function corFavorita(cor){
  if(cor === 'Azul'){
    console.log('Olhe para o céu.');
  }else if(cor === 'Verde'){
    console.log('Olhe para a floresta.');
  }else if(cor === 'Amarelo'){
    console.log('Olhe para o sol.');
  }else{
    console.log('Feche os olhos');
  }
}
corFavorita('Verde')

// Argumentos podem ser funções

// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function(){
  console.log('Clicou');
});
// Afunçõ possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// função anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

function mostraFuncao(){
  console.log('Olá');
}

addEventListener('click', mostraFuncao);

function imc2(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(60, 1.70);

// Valores retornados

// Uma funcção pode tetornar qualquer tipo de dado e até outras funções

function terceiraIdade(idade){
  console.log(typeof idade)
  if(typeof idade !== 'number'){
    return 'Informe a sua idade';
  }else if(idade >= 60){
    return true;
  }else{
    return false;
  }
}

console.log(terceiraIdade('Teste'))

// Escopo

// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function faltaVisitar(paisesVisitados){
  totalPaises = 190;
  return `Falta visitar ${totalPaises - paisesVisitados}`;
}
console.log(faltaVisitar(25))

console.log(totalPaises); // Não será retornado por estar dentro deoutro escopo

// Escopo Léxico

// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados(){
  var nome = 'Abel';
  var idade = 23;
  function outrosDados(){
    var endereco = 'Carapicuiba';
    var idade = 25;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados())
// outrosDados(); // retorna um erro

// Exercícios

// Crie uma função para verificar se um valor é Truthy
function verificarTrue(valor1){
  return !!valor1
}
console.log(verificarTrue(0))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(num1,num2, num3, num4){
  total = num1 + num2 + num3 + num4;
  return total
}
console.log(perimetro(3, 3, 4, 4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `Seu nome completo é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Abelardo','Alves'))

// Crie uma função que verifica se um número é par
function numeroPar(numero){
  if(numero % 2 == 0){
    return `É par`;
  }else{
    return `É impar`
  }
}
console.log(numeroPar(1000))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoArgumento(valor2){
  console.log(typeof valor2)
}
tipoArgumento('Boa noite!')

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Abelardo Alves');
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
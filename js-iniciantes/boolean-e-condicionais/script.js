var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao){
  console.log('É verdadeiro!');
} else if(possuiDoutorado){
  console.log('Possui Doutorado!');
}else{
  console.log('Não possui nada!');
};

var nome = 0;

if(nome){
  console.log(nome);
}else{
  console.log('Nome não existe');
};

// Flase
if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

//True
if(true);
if(1);
if(' ');
if('Abel');
if(-5);
if({});

// Operador Lógico de Negação !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

if(!possuiDoutorado){ // ! é utilizado para negação
  console.log('Não possiu dourado');
}else{
  console.log('Possiu dourado');
};

//exemplos
if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' '); // true
if(!!''); // false

// Você pode utilizar o !! para verificar se uma expressão é true ou false


// Operadores de comparação

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// Opeadores de comparação

10 == '10'; // true
10 == 10; // true
10 === 10; // true
10 === '10'; // false
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true

// Operadores lógicos &&

// && compara se uma operação e outra é verdadeira
// && retorna o útimo valor
// && retorna o valor falso

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // Cão. Sempre irá retornar o altimo valor
(5 - 5) && (5 + 5); // 0. Sempre irá retornar o primeiro valor false
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

var condicional = (5 - 10) && (5 + 5);
if(condicional){
  console.log('Verdadeiro!', condicional)
}else{
  console.log('False!')
}

//Operadores Lógicos ||
// || compara se uma expressão ou outra é verdadeira

true || true;
true || false;
false || true;
'Gato' || 'Cão'; // Gato. Retorna o primeiro valor
(5 - 5) || (5 + 5) // 10. Retorna o valor true
'Gato' || false;
(5 >= 5) || (3 < 6); // true
(5 < 3) || (6 > 7); // false

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2); // Retorna o primeiro verdadeiro
console.log(condicional2)

//Switch

// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Verde';

switch (corFavorita){
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para as rosas.');
    break
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break
  case 'Verde':
    console.log('Olhe para a floresta.');
    break;
  default:
    console.log('Feche os olhos.')
}

// Exercícios

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeAbel = 23;
var idadePai = 53;

if(idadeAbel > idadePai){
    console.log('É maior!');
}else if(idadeAbel < idadePai){
    console.log('É menor');
}else{
    console.log('É igual');
};

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
  console.log('Brasil tem mais habitantes.');
}else{
  console.log('Brasil tem menos habitantes.')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}// Será retornado 'Falso'

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // A segunda expressão (5 > 2) é verdadeira  e como Cão será retornado por ser o segundo valor.
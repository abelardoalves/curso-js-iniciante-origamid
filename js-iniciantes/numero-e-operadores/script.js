var idade = 2e4;
console.log(idade)

var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var muiltiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; // 5 // resto de dvisão

// Operadores aritméticos (Strings)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; //50
var multiplicacao = '100' * '2'; //200
var divisao = 'Compre 10' / 2; // NaN (Not a Number)

// É possível verificar se uma voriável é NaN ou não com a funçã isNan()
console.log(isNaN(divisao))

// Ordem
// Começa por multiplicação edivisão, depois por soma e subtrção.

var total1 = 20 + 5 *2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 *5; // 50;
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1)

// Operadores aritmeticos unários

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2); //6

var incremento3 = 5;
console.log(--incremento3);











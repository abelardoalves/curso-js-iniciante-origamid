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

// O + e - tantam transformar o valor seguinte em número

var frase = 'Isso é um teste';
+ frase; //NaN
- frase; //NaN

var idade1 = '23';
+idade1; // 23 (número)
-idade1; // -23 (número)
console.log(+idade1 + 5); // 28

var num1 = 5;
console.log(-num1);

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//EXERCÍCIOS

//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35

//Crie duas expressões que retornem NaN
var n1 = '100s';
console.log(+n1);
var n2 = 'teste' / 2;
console.log(++n2);

// Somar a string '200' com número 50 e retornar 250
var n3 = '200';
console.log(+n3 + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x)

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)  
console.log(peso)




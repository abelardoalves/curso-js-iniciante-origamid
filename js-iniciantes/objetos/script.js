var pessoa = {
  nome: 'Abel',
  idade: 23,

}

// Métodos

// É uma propriedade que possui uma função no local do valor.

var quadrado ={
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro(lado){
    return this.lados * lado;
  }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(Math.random());
console.log(Math.PI);

// Dot Notation GET

// Acesse propriedades de um objeto utilizando o pornto .

// Dot Notation SET

// Subtitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight(){
    return this.height / 2;
  }
}
menu.backgroundColor = '#000';

menu.color = 'blue';

var bg = menu.backgroundColor;

menu.esconder = function(){
  console.log('Escondi');
}

// Protótipo e herança

// O objeto herda propriedades e métodos do objeto que foi utilizado para cirar o mesmo.

var menu1 = {
  width: 800,
}
console.log(menu.hasOwnProperty('width'));
console.log(menu.hasOwnProperty('hetight'));

//Exercícios

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Abelardo',
  sobrenome: 'Alves'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: '10',
  verHomem(verHomem){
    if(verHomem === true){
      return `Cachorro late.`
    }else{
      return `Cachorro não late.`
    }
  }
}
console.log(cachorro.verHomem(false))


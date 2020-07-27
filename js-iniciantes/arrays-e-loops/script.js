var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // XBox

videoGames.pop(); // Remove o útimo item e retorna ele
videoGames.push('3DS'); // Adicona ao final da array
videoGames.length; // 3 

// For Loop

// Fazem alfo repetidamente até que uma condição seja atingida.
// O for loop possui 3 partes. Início, condição, incremento

for (var numero = 0; numero <= 10; numero++){
  console.log(numero);
}

// While loop

var i = 0;
while (i < 10){
  console.log(i);
  i++;
} // Retorna 0 até 9

// Arrays e loops

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++){
  console.log(videoGames[i]);
}

// Break
for (var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if (videoGames[item] === 'PS4'){
    break;
  }
}

// ForEach
frutas = ['Banana', 'Maçã', 'Mamão', 'Abacaxi', 'Morango']

frutas.forEach(function(valor, index, array){
  console.log(valor, index, array)
})

// Exercícios

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
copasBrasil = [1959, 1962, 1970, 1994, 2002];


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copasBrasil.forEach(function(ano){
  console.log(`O Brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(valor = 0; valor < frutas.length; valor++){ 
  console.log(frutas[valor]);
  if (frutas[valor] === 'Pera'){
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];


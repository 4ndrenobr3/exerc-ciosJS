// O metodo map cria um novo array a partir de um array existente, podendo fazer alterações na cópia

var arr = [1, 2, 3, 4, 5, 6];

var map = arr.map(function(item, index, array){
	return item * 2;
});

// Irá filtrar e retornar os itens do map maiores que 4

var filter = map.filter(function(item, index, array){
  return item > 4;
});

console.log(arr, map, filter);
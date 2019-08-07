//  Cria um Array vazio

var array = [];

// Adiciona itens no final do Array

array.push(1, 2, 3, 4);

// Remove o ultimo itens do Array

array.pop();

// Retorna o Array como string

array.toString();

// Retorna o Array como string, pode ser passado um separador por parâmetro

array.join('-');

// Retorna o Array concatenando com o que for passado no parâmetro

array.concat(5, 6, 7, 8);

// Adiciona itens no inicio do Array

array.unshift(55);


// Remove o primeiro item do Array

array.shift();

// Retorna os itens do Array que selecionamos passando por parâmetro

array.slice(0, 5) // retorna do indice 0 até o indice 4

// Remove/substitui itens do Array passando por parâmetro

array.splice(3); // Remove a partir do indice 3
array.splice(1, 3) //Remove 3 itens a partir do indice 1
array.splice(1, 0, 5) //Não remove nada e adiciona o 5 a partir do indice 1


// forEach

array.forEach(function(item, index, array){
	console.log(item, index, array);
});


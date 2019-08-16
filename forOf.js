var users = [
  {
    nome: 'João', id: 5070
  },
  {
    nome: 'José', id: 6080
  }
];

// Usando o for of
for( var user of users ){
  console.log(
    'O usuário '
    + user.nome
    + ' possui o número de identificação '
    + user.id
  );
}
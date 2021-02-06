const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);

// Método de utilizar o objeto dentro de outro objeto.
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);
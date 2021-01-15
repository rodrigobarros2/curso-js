//   012345678
let umaString = 'Meu valor';

// length

// Caractere de escape \
console.log(umaString.charAt(-1)); 
// Retorna o valor da pos

console.log(umaString.charCodeAt(4)); 
// Retorna o código inteiro que repsetanta o valor na tabela asc

console.log(umaString.concat(' ', 'ei', ' ', 'sister')); 
// raramente usado

console.log(umaString.indexOf('e', 0)); 
/* vai procurar o indice onde começa a palavra texto dentro da variável uma string */

console.log(umaString.lastIndexOf('e', umaString.length)); 
// Retorna o índice //começa de traz pra frente */

console.log(umaString.match(/[A-Za-z]+/g)); 
// Retorna um array com os valores encontrados (se g)

console.log(umaString.search(/[a-z]+/g)); 
// Retorna o índice da primeira ocorrência

/* vai substituir um que tá dentro da variável para outra */
console.log(umaString.replace('um', 'outra'));

console.log(umaString.slice(2, 7));
/*  pega a string da posição 2 até a posição 7 */

console.log(umaString.slice(-5, -1));
/* vai pegar as 5 ultimas palavras do texto menos a ultima */

console.log(umaString.split(' ', 2));
/* cada palavra(obs, não letra) do texto vai ser dividida por um espaço */

console.log(umaString.toUpperCase());

/* deixa a string em maiusculo */
console.log(umaString.toLowerCase());
/* deixa a string em minusculo */


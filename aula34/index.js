const frutas = ['Maçã', 'Pêra', 'Uva'];
const novasFrutas = frutas.map(el => el.toLowerCase());
console.log(novasFrutas); // [ 'maçã', 'pêra', 'uva' ]


const charDota = ['Medusa', 'Bara', 'Abadon'];

for (let i = 0; i < charDota.length; i++){
    console.log(`índice ${i} personagem`, charDota[i]);
}
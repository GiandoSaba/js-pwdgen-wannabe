let nome = prompt('Inserisci il tuo nome');
let cognome = prompt('Inserisci il tuo cognome');
let colore = prompt('Inserisci il tuo colore preferito');
let numero = prompt('Inserisci il tuo numro preferito');
let sum = parseInt(numero) + 5;

let password = nome + cognome + colore + sum;
console.log(password);

document.getElementById("my_div").innerHTML =
    `
    <h1> La tua password generata è: ${password} </h1>

`;
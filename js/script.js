let nome = prompt('Inserisci il tuo nome');
let cognome = prompt('Inserisci il tuo cognome');
let colore = prompt('Inserisci il tuo colore preferito');
const numero = 21;
let password = nome + cognome + colore + numero;
console.log(password);

document.getElementById("my_div").innerHTML =
`
    <h1> La tua password generata è: ${password} </h1>

`;
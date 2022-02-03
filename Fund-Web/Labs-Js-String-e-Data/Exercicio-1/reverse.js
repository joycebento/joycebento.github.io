var texto = document.querySelector('#valor').value;
var invertida = texto.split("").reverse().join("");
document.querySelector('#resultado').innerHTML=invertida;
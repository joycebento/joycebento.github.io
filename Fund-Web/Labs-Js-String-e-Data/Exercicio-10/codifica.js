function codifica() {
    var texto = document.querySelector("#frase").value;
    var textoArray = texto.toLowerCase().split("");
    for (var i = 0; i < textoArray.length; i++) {
        textoArray[i] = trocaLetra(textoArray[i]);
    }
    var resultado = textoArray.join("");
    document.querySelector("#resultado").innerHTML += resultado;
}

function trocaLetra(letra) {
    switch (letra) {
        case "t":
            return "p";
        case "p":
            return "t";
        case "e":
            return "o";
        case "o":
            return "e";
        case "n":
            return "l";
        case "l":
            return "n";
        case "i":
            return "a";
        case "a":
            return "i";
        case "s":
            return "r";
        case "r":
            return "s";
        default:
            return letra;
    }
}
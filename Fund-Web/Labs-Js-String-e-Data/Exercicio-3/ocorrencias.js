function ocorrencia() {
    var texto = document.querySelector("#texto").value;
    var textoArray = texto.split(' ');
  
    var palavras = [];
    var contagemPalavras = [];
  
    for(i=0 ; i< textoArray.length ; i++){
        
        if(palavras.includes(textoArray[i])){
            contagemPalavras[palavras.indexOf(textoArray[i])] += 1;
        } else {
            palavras.push(textoArray[i]);
            contagemPalavras[palavras.indexOf(textoArray[i])] = 1;
        }
    }
    for(i=0;i<palavras.length;i++){
    document.querySelector('#resultado').innerHTML += "<br><br>"+ palavras[i] + ": " + contagemPalavras[i];
    }
}
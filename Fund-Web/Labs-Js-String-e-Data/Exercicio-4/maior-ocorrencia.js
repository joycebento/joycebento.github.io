function ocorrencia() {
    var texto = document.querySelector("#texto").value;
    var textoArray = texto.split(' ');
  
    var palavras = [];
    var contadorPalavras = [];
  
    for(i=0 ; i< textoArray.length ; i++){
        
        if(palavras.includes(textoArray[i])){
            contadorPalavras[palavras.indexOf(textoArray[i])] += 1;
        } else {
            palavras.push(textoArray[i]);
            contadorPalavras[palavras.indexOf(textoArray[i])] = 1;
        }
    }
    
    var max = 0;
    var posicao = 0;
    for(i=0;i<contadorPalavras.length;i++){
        if(contadorPalavras[i]> max){
            max = contadorPalavras[i];
            posicao = i;
        }
    }

   
        var texto = document.querySelector("#texto").value;
        var textoArray = texto.split(' ');
  
        var palavras = [];
        var contadorPalavras = [];
  
    for(i=0 ; i< textoArray.length ; i++){
        
        if(palavras.includes(textoArray[i])){
            contadorPalavras[palavras.indexOf(textoArray[i])] += 1;
        } else {
            palavras.push(textoArray[i]);
            contadorPalavras[palavras.indexOf(textoArray[i])] = 1;
        }
    }
    
    var max = 0;
    var posicao = 0;
    for(i=0;i<contadorPalavras.length;i++){
        if(contadorPalavras[i]> max){
            max = contadorPalavras[i];
            posicao = i;
        }
    }

   document.querySelector('#resultado').innerHTML += " A palavra de maior ocorrência é: "+ palavras[posicao] + "<br> Com " + contadorPalavras[posicao] + " ocorrências.";

  }

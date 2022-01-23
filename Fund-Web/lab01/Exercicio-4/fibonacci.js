function fibonacci(){
    var penultimo=0, ultimo=1;
    var numero;
  
  for(var i=0;i<=100;i++){
    
    numero= ultimo + penultimo;
    penultimo = ultimo;
    ultimo=numero;
    console.log(numero);
   }
  
  
}

fibonacci();
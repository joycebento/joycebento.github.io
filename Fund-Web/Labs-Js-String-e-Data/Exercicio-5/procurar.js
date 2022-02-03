function procurar(){
    var texto = document.querySelector("#texto").value;
    var palavra = document.querySelector("#palavra").value;
    var substituta = document.querySelector("#substituta").value;
    var textoArray = texto.split(' ');
    for(var i=0;i<textoArray.length;i++){
        if(textoArray[i]==palavra){
            textoArray[i]=substituta;
        }
    }
    var resultado=textoArray.join(' ');
    document.querySelector("#resultado").innerHTML += "<br>"+ resultado;
}
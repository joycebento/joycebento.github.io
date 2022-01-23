function soma1000(){
    var i;
    var soma=0;

    for(i=0;i<=1000;i++){
        if(i%2==0){
            soma+=i;
        }
    }
document.querySelector('#resposta').innerHTML=soma;
}
soma1000();

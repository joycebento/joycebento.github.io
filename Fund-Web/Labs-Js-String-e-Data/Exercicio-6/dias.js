function dias(){
    var nascimento= new Date(document.querySelector("#ano").value,document.querySelector("#mes").value,document.querySelector("#dia").value);
    var atual = new Date();
    var resultado = atual.getTime() - nascimento.getTime() ;

    var segundos = resultado / 1000;
    var minutos = segundos / 60;
    var horas = minutos / 60;
    var dias = horas / 24
    document.querySelector("#resultado").innerHTML += " A pessoa tem "+ dias.toFixed(2)+" dias de vida.";
}
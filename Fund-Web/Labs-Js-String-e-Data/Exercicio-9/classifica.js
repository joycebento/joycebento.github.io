function classifica(){
var senha = document.querySelector("#senha").value;

var numeros = /([0-9])/;
var alfabeto = /([a-zA-Z])/;
var alfabetoMaiusculas = /([A-Z])/;
var charEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,.])/;
    if (senha.length < 6) {
        document.querySelector("#resultado").innerHTML +=
            "<span style='color:purple'> <br> <br>Senha inválida, insira no mínimo 6 caracteres. </span>";
    } else if (
        senha.match(numeros) &&
        senha.match(alfabeto) &&
        senha.match(alfabetoMaiusculas) &&
        senha.match(charEspeciais)
    ) {
        document.querySelector("#resultado").innerHTML +=
            "<span style='color:green'> <br> <br>Senha forte. </span>";
    } else if (
        senha.match(numeros) &&
        senha.match(alfabeto) &&
        senha.match(alfabetoMaiusculas)
    ) {
        document.querySelector("#resultado").innerHTML +=
            "<span style='color:orange'> <br> <br>Senha média, insira pelo menos 1 caracter especial. </span>";
    } else if (senha.match(alfabeto) && senha.match(alfabetoMaiusculas)) {
        document.querySelector("#resultado").innerHTML +=
            "<span style='color:red'> <br> <br>Senha fraca, insira números e caracteres especiais. </span>";
    } else if (senha.match(alfabetoMaiusculas)) {
        document.querySelector("#resultado").innerHTML +=
            "<span style='color:red'> <br> <br>Senha muito fraca, insira números, caracteres especiais e letras minúsculas. </span>";
    } else if (senha.match(alfabeto)) {
        document.querySelector("#resultado").innerHTML +=
            "<span style='color:red'> <br> <br>Senha muito fraca, insira números, caracteres especiais e letras maiúsculas. </span>";
    }
}
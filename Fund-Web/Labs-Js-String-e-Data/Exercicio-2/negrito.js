function Vogal() {
    var string = document.querySelector("#string").value;
    var stringArray = string.split('');
    for(i=0;i<stringArray.length;i++){
        console.log(i);
        if(stringArray[i]=='a'||stringArray[i]=='A'||stringArray[i]=='e'||stringArray[i]=='E'||stringArray[i]=='i'||stringArray[i]=='I'||stringArray[i]=='o'||stringArray[i]=='O'||stringArray[i]=='u'||stringArray[i]=='U'){
            stringArray[i]= stringArray[i].bold();
        }
    }
    var resultado = stringArray.join('');
    document.querySelector('#resultado').innerHTML += resultado;
  }
  Vogal();
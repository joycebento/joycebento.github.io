function distancia() {
    let data1Inicio = document.getElementById("data1").value.split("/");
    let dataFinal1 = new Date(data1Inicio[2], data1Inicio[1], data1Inicio[0]);
  
    let data2Inicio = document.getElementById("data2").value.split("/");
    let dataFinal2 = new Date(data2Inicio[2], data2Inicio[1], data2Inicio[0]);
  
    if (dataFinal1 > dataFinal2) {
      resultado = Math.round(
        (dataFinal1 - dataFinal2) / (7 * 24 * 60 * 60 * 1000)
      );
    }
    if (dataFinal1 < dataFinal2) {
      resultado = Math.round(
        (dataFinal2 - dataFinal1) / (7 * 24 * 60 * 60 * 1000)
      );
    } else resultado = 0;
  
    document.querySelector("#resultado").innerHTML +=" A diferença é de " + resultado + " semana(s).";
  }
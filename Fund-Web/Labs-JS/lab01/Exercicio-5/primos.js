var numero;

function primo(numero){
    for(let divisor=2; divisor<=Math.sqrt(numero);divisor++)
    {
        if(numero%divisor==0)
            return false;
        return true;
    }
}
function imprimePrimo(inicio, fim) {
    for(let i=inicio; i<=fim; i++){
        if(primo(i)) console.log(i);
    }
}

imprimePrimo(2,1000)
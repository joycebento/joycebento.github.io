
function fatorial (a)
{
    if(a<=1) return 1;
    else return a*fatorial(a-1);
}
var valor = document.querySelector('#valor').value;

document.querySelector('#resultado').innerHTML = fatorial(valor);

valor.reset;
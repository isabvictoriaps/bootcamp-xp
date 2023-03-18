var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');
var r = document.getElementById('r')
var r2 = document.getElementById('r2')


function soma(){
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    
    // caso o resultado for diferente de um número, limpar o span
    r.textContent = isNaN(resultado) ? '' : resultado;
}

function multiplicacao(){
    var resultado2 = n3.valueAsNumber * n4.valueAsNumber;
    r2.textContent = isNaN(resultado2) ? '' : resultado2;
}

document.addEventListener('input', multiplicacao);


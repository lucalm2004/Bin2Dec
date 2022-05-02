
function pagina() {
    // parrafo para poner numero
    var infonum = document.getElementById('text1')
    // parrago para poner numero
    var infonum2 = document.getElementById('text2')
    // box donde registra numero
    var num = document.getElementById('number').value
    // parrago resultado
    var calculando = document.getElementById('resultado')
    //selector
    var selector = document.getElementById('selector').value
    var bin = document.getElementById('bin')
    var decimal = 255;
    var result = decimal.toString(16);

//canviar nombre selectores
     if(selector == 'bin'){
        bin.innerHTML='Binary'
    }if(selector == 'hex'){
        bin.innerHTML='Decimal'
    }

// filtrar numeros
    calculando.innerHTML = parseInt(num, 2);
    var lastnum = num.charAt(num.length - 1)
    if (num == '') {
        calculando.innerHTML = ''
    }
    if (lastnum == 0 || lastnum == 1) {
        infonum2.innerHTML = 'Here is your decimal!'
        infonum.innerHTML = ''
    } else {
        calculando.innerHTML = 'Waiting for a valid binary number...'
    }
    if (lastnum >> 1 || lastnum >> 999999) {
        infonum.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        infonum2.innerHTML = ''
    }
    if (lastnum == '') {
        infonum.innerHTML = ''
        infonum2.innerHTML = ''
    }

 
   
}

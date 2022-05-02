
function pagina() {
    // parrafo para poner numero
    var infonum = document.getElementById('text1')
    // parrago para poner numero
    var infonum2 = document.getElementById('text2')
    // box donde registra numero
    var numero = document.getElementById('number').value
    // parrago resultado
    var calculando = document.getElementById('resultado')

// filtrar numeros
    calculando.innerHTML = parseInt(numero, 2);
    var ultimodigito = numero.charAt(numero.length - 1)
    if (numero == '') {
        calculando.innerHTML = ''
    }
    if (ultimodigito == 0 || ultimodigito == 1) {
        infonum2.innerHTML = 'Here is your decimal'
        infonum.innerHTML = ''
    } else {
        calculando.innerHTML = 'Waiting for a valid binary number...'
    }
    if (ultimodigito >> 1 || ultimodigito >> 999999) {
        infonum.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        infonum2.innerHTML = ''
    }
    if (ultimodigito == '') {
        infonum.innerHTML = ''
        infonum2.innerHTML = ''
    }
}

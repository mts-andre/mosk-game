var lag = 0
var alt = 0

function verificarTamanhoTela() {
    lag = window.innerWidth
    alt = window.innerHeight

    console.log(alt, lag)
}

verificarTamanhoTela()

function posicionarElemento() {
    if(window.document.getElementById('moska')) {
        window.document.getElementById('moska').remove()
    }

    var posX = Math.floor(Math.random() * lag) - 90
    var posY = Math.floor(Math.random() * alt) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    var mosk = window.document.createElement('img')
    mosk.src = 'img/mosca.png'
    mosk.className = alternarTamanho() + ' ' + alternarDirecao()
    mosk.style.left = posX + 'px'
    mosk.style.top = posY + 'px'
    mosk.style.position = 'absolute'
    mosk.id = 'moska'

    window.document.body.appendChild(mosk)

    alternarTamanho()
}

function alternarTamanho() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosk1'
        case 1:
            return 'mosk2'
        case 2:
            return 'mosk3'
    }   
}

function alternarDirecao() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }   
}

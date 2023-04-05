var lag = 0
var alt = 0

function verificarTamanhoTela() {
    lag = window.innerWidth
    alt = window.innerHeight

    console.log(alt, lag)
}

verificarTamanhoTela()

function posicionarElemento() {
    var posX = Math.floor(Math.random() * lag) - 90
    var posY = Math.floor(Math.random() * alt) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    var mosk = window.document.createElement('img')
    mosk.src = 'img/mosca.png'
    mosk.className = 'mosk'
    mosk.style.left = posX + 'px'
    mosk.style.top = posY + 'px'
    mosk.style.position = 'absolute'

    window.document.body.appendChild(mosk)
}
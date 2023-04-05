var lag = 0
var alt = 0
var life = 1
var tempo = 10
var tempoAlterado = 1500

function verificarTamanhoTela() {
    lag = window.innerWidth
    alt = window.innerHeight

    console.log(alt, lag)
}

verificarTamanhoTela()

var crono = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(crono)
        clearInterval(newMosk)
        window.location.href = 'victory.html'
    } else {
        window.document.getElementById('cronoTempo').innerHTML = tempo
    }

    
}, 1000)

function posicionarElemento() {
    if(window.document.getElementById('moska')) {
        window.document.getElementById('moska').remove()
        
        if(life > 3) {
            window.location.href = 'endGame.html'
        } else {
            window.document.getElementById('life' + life).src = 'img/coracao_vazio.png'
        life++
        }
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
    mosk.onclick = function() {
        this.remove()
    }

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

function iniciar() {
    var lvlCh = window.document.getElementById('lvl-opt').value

    if(lvlCh === '') {
        alert('O jogo não pode ser iniciado sem que seja definido uma dificuldade para o desafio.')
        return false
    }

    window.location.href = 'appGame.html?' + lvlCh
}

var lvlChoose = window.location.search
lvlChoose = lvlChoose.replace('?', '')

if(lvlChoose === 'easy') {
    tempoAlterado = 1500
} else if(lvlChoose === 'normal') {
    tempoAlterado = 1200
} else if(lvlChoose === 'hard') {
    tempoAlterado = 900
}

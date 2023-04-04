// Verificando dimensões da tela do usuário
var lag = 0
var alt = 0

function verificarDimensaoTela() {
    lag = window.screen.availWidth
    alt = window.screen.availHeight
}

verificarDimensaoTela()

function definirPosicao() {
    // Criando valores random 
    var posX = Math.floor((Math.random() * lag)) - 90
    var posY = Math.floor((Math.random() * alt)) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    // Criando elementos HTML
    var mosk = window.document.createElement('img')
    mosk.src = 'img/mosca.png'
    mosk.className = alterarTamanho() + ' ' + alterarDirecao()
    mosk.style.left = posX + 'px'
    mosk.style.top = posY + 'px'
    mosk.style.position = 'absolute'

    window.document.body.appendChild(mosk)
}

function alterarTamanho() {
    // Criando um valor random
	var classe = Math.floor(Math.random() * 3)
	
    // Definindo classe
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function alterarDirecao() {
    // Criando um valor random
	var classe = Math.floor(Math.random() * 2)
	
    // Definindo classe
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'
	}
}

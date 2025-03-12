/**
 * Processo de renderização
 * Tela Principal
 */

console.log("Processo de renderização")

// envio de uma mensagem para o main abrir a janela cliente
function cliente() {
    //console.log("Teste do botão cliente")
    // uso da api (autorizado no preçoad.js)
    api.clientWindow()
}

// envio de uma mensagem para o main abrir a janela os
function os() {
    //console.log("Teste do botão OS")
    // uso da api (autorizado no preçoad.js)
    api.osWindow()
}

function termos() {
    api.termosWindow()
}
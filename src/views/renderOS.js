const { ipcRenderer } = require('electron');

btnGerarOS.addEventListener('click', () => {
  const os = {
    statusOS: document.getElementById('osStatus').value,
    instModel: document.getElementById('inputEquipamento').value,
    numSerie: document.getElementById('inputSerial').value,
    problemaRelatado: document.getElementById('inputDefeito').value,
    luthier: document.getElementById('inputLuthier').value,
    luthierDiag: document.getElementById('inputDiagnostico').value,
    pecas: document.getElementById('inputPecas').value,
    valor: document.getElementById('inputValor').value
  };

  ipcRenderer.send('new-os', os);
});

// ============================================================
// == CRUD Create/Update ======================================

//Evento associado ao botão submit (uso das validações do html)
frmOs.addEventListener('submit', async (event) => {
    //evitar o comportamento padrão do submit que é enviar os dados do formulário e reiniciar o documento html
    event.preventDefault()
    // Teste importante (recebimento dos dados do formuláro - passo 1 do fluxo)
    console.log(statusOS.value, instOs.value, numserieOs.value, problemOs.value, luthierOs.value, luthierdiagOs.value, pecasOs.value, valorOs.value)
    //Criar um objeto para armazenar os dados do cliente antes de enviar ao main
    const os = {
        statusOS: statusOs.value,
        instModel: instOs.value,
        numSerie: numserieOs.value,
        problemaRelatado: problemOs.value,
        luthier: luthierOs.value,
        luthierDiag: luthierdiagOs.value,
        pecas: pecasOs.value,
        valor: valorOs.value
    }
    // Enviar ao main o objeto client - (Passo 2: fluxo)
    // uso do preload.js
    api.newOs(os)
})


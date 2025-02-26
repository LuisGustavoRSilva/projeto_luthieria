/**
 * Arquivos de pre-carregamento e reforço de segurança na comunicação entre processos (IPC)
 */

// Importação dos recursos do framework electron
// contextbridge (segurança) ipcrender (condição)

const { contextBridge, ipcRenderer } = require("electron")

// autorizar 
contextBridge.exposeInMainWorld('api', {
    clientWindow: () => ipcRenderer.send('client-window'),
    osWindow: () => ipcRenderer.send('os-window')
})
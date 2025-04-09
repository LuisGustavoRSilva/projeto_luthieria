/**
 * Modelo de dados para construção das coleções("tabelas")
 * Ordem de serviço
 */

// importação dos recursos do framework mongoose
const { model, Schema } = require('mongoose')

// criação da estrutura da coleção OS
const osSchema = new Schema({
    statusOS: {
        type: String
    },    
    instModel: {
        type: String
    },
    numSerie: {
        type: String,
        unique: true,
        index: true
    },
    problemaRelatado: {
        type: String
    },
    luthier: {
        type: String        
    },
    luthierdiagno: {
        type: String  
    },
    pecas: {
        type: String  
    },
    valor: {
        type: String  
    },
}, {versionKey: false}) //não versionar os dados armazenados

// exportar para o main o modelo de dados
module.exports = model('Os', osSchema)
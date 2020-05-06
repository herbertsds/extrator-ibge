// Imports
const fs = require('fs')
const { hashUF } = require('./dictionary')

// Global Variables
let globalLine

// Get the registry by its position
const getField = (initPos, length) => globalLine.substr(initPos-1, length)

// Return the Translated Data according to IBGE's data
const getTranslatedData = line => {
    globalLine = line
    
    return {
        V0001_UNIDADE_DA_FEDERAÇÃO: hashUF[getField(1, 2)],
        V0002_CODIGO_DO_MUNICIPIO: getField(3, 5),
        V6400_NIVEL_DE_INSTRUCAO: getField(158,1),
        V6352_CURSO_SUPERIOR_GRADUACAO: getField(159,3),
        V6461_OCUPACAO: getField(200,4),
        V6471_ATIVIDADE: getField(204,5)
    }
}

// Responsible for extract data
const extract = (file, writer) => {

    filepath = file.filepath

    // Filter to use only desired files
    console.log(`Stating extraction of: ${file.basename.replace('.txt', '.csv')}`)

    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(filepath, {encoding: 'UTF-8'})

        readStream.on('data', (chunk) => {
            const data = chunk.toString()
    
            const lines = data.split(/\r?\n/);
    
            lines.forEach(line => {
                writer.write(getTranslatedData(line))
            })
        })

        readStream.on('end', () => {
            console.log(`${file.basename.replace('.txt', '.csv')} successfully processed\n\n`)
            resolve()
        })
        readStream.on('error', err => reject(err))

    })

}


    
module.exports = {
    extract
}
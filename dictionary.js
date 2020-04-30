// Get the registry by its position
const getPos = (str, initPos, length) => str.substr(initPos-1, length)

// Return the Translated Data according to IBGE's data
const getTranslatedData = line => {
    return {
        V0001_UNIDADE_DA_FEDERAÇÃO: getPos(line, 1, 2),
        V0002_CODIGO_DO_MUNICIPIO: getPos(line, 3, 5)
    }
}
    
module.exports = {
    getTranslatedData,
}
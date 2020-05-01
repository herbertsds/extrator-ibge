// Global Variables
let globalLine
const hashUF = {
    11: 'Rondônia',
    12: 'Acre',
    13: 'Amazonas',
    14: 'Roraima',
    15: 'Pará',
    16: 'Amapá',
    17: 'Tocantins',
    21: 'Maranhão',
    22: 'Piauí',
    23: 'Ceará',
    24: 'Rio Grande do Norte',
    25: 'Paraíba',
    26: 'Pernambuco',
    27: 'Alagoas',
    28: 'Sergipe',
    29: 'Bahia',
    31: 'Minas Gerais',
    32: 'Espírito Santo',
    33: 'Rio de Janeiro',
    35: 'São Paulo',
    41: 'Paraná',
    42: 'Santa Catarina',
    43: 'Rio Grande do Sul',
    50: 'Mato Grosso do Sul',
    51: 'Mato Grosso',
    52: 'Goiás',
    53: 'Distrito Federal'
}
const hashNivelInstrucao = {
    1: 'Sem instrução e fundamental incompleto',
    2: 'Fundamental completo e médio incompleto',
    3: 'Médio completo e superior incompleto',
    4: 'Superior completo',
    5: 'Não determinado'
}

// Get the registry by its position
const getField = (initPos, length) => globalLine.substr(initPos-1, length)

// const getPesoAmostral = () => {
//     const peso_raw = getField(29,16)
//     return parseFloat(`${peso_raw.substr(0,3)}.${peso_raw.substr(3,13)}`)

// }


// Return the Translated Data according to IBGE's data
const getTranslatedData = line => {
    globalLine = line
    
    return {
        V0001_UNIDADE_DA_FEDERAÇÃO: hashUF[getField(1, 2)],
        V0002_CODIGO_DO_MUNICIPIO: getField(3, 5),
        V6400_NIVEL_DE_INSTRUCAO: hashNivelInstrucao[getField(158,1)],
        V6352_CURSO_SUPERIOR_GRADUACAO: getField(159,3),
        V6461_OCUPACAO: getField(200,4),
        V6471_ATIVIDADE: getField(204,5)
        // V0011_AREA_DE_PONDERACAO: getField(8,13),
        // V0300_CONTROLE: getField(21,8),
        // V0010_PESO_AMOSTRAL: getPesoAmostral()



    }
}
    
module.exports = {
    getTranslatedData,
}
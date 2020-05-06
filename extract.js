// Importing created functions
const filepaths = require('./utils/filepath')
const structure = require('./utils/structure')
const { writer_module } = require('./utils/writer')

const base_url = './generated_data/'
let writer
let filteredFilepaths = []

filepaths.on('data', (file) => {
    
    filepath = file.filepath

    if(filepath.includes('Amostra_Pessoas')){
        filteredFilepaths.push(file)
    }
})

filepaths.on('end', async () => {
    
    for(let i = 0; i < filteredFilepaths.length ; i++){
        filtered = filteredFilepaths[i]
        writer = writer_module(`${base_url}/${filtered.basename.replace('.txt', '.csv')}`)
        
        await structure.extract(filtered, writer)
    }
})






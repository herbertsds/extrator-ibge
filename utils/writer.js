const csvWriter = require('csv-write-stream')
const fs = require('fs')


exports.writer_module = (csvPath) => {
    // Initializing modules
    const newCsv = fs.createWriteStream(csvPath)
    const writer = csvWriter({separator: ';'})

    writer.pipe(newCsv)

    return writer
}
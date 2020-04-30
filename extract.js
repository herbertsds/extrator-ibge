// Importing modules and functions
const log = console.log
const fs = require('fs')
const readline = require('readline');
const csvWriter = require('csv-write-stream')

// Importing created functions
const filepaths = require('./filepath')
const dictionary = require('./dictionary')

// Initializing modules
const newCsv = fs.createWriteStream('new.csv');
const writer = csvWriter({separator: ';'})

writer.pipe(newCsv)

// Reading Files to create csv
filepaths.forEach((filepath) => {

    const data = fs.readFileSync(filepath, 'UTF-8')

    const lines = data.split(/\r?\n/);

    lines.forEach(line => {
        writer.write(dictionary.getTranslatedData(line))
    })

})




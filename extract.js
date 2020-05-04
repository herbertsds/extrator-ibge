// Importing created functions
const filepaths = require('./utils/filepath')
const structure = require('./utils/structure')
const { writer_module } = require('./utils/writer')

const writer = writer_module('new.csv')

structure.extract(filepaths, writer)



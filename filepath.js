const walker = require('folder-walker')

var filepaths = walker('./raw_data/txt/')

module.exports = filepaths
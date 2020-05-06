const walker = require('folder-walker')

var filepaths_stream = walker('./raw_data/')

module.exports = filepaths_stream
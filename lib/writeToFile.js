'use strict'

var fs = require('fs')
var config = require('../config')

function writeToFile (fileName, itemString, callback) {
  var path = config.storage.path + '/' + fileName + '.json'
  fs.writeFile(path, itemString, function (error) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, 'Wrote ' + path)
    }
  })
}

module.exports = writeToFile

'use strict'

var fs = require('fs')
var config = require('../config')

function writeToFile(fileName, itemString, callback) {
  var item = JSON.parse(itemString)
  var elements = Object.keys(itemString).length
  var fileName = config.storage.path + '/' + fileName + '.json'
  fs.writeFile(fileName, itemString, function (error) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, 'Wrote ' + fileName)
    }
  })
}

module.exports = writeToFile

'use strict'

var fs = require('fs')

function writeToFile (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'), null)
  }

  if (!options.files) {
    return callback(new Error('Missing required input: options.files'), null)
  }

  if (!Array.isArray(options.files)) {
    return callback(new Error('Wrong input type: options.files must be an array'), null)
  }

  if (!options.storagePath) {
    return callback(new Error('Missing required input: options.storagePath'), null)
  }

  var message = []
  var elements = Object.keys(options.files).length
  var i = 0
  var path

  options.files.forEach(function (file) {
    path = options.storagePath + '/' + file.fileName
    fs.writeFile(path, JSON.stringify(file.data, null, 2), function (error) {
      i++
      if (error) {
        return callback(error, null)
      } else {
        message.push('Wrote ' + file.fileName)
        if (i === elements) {
          return callback(null, message)
        }
      }
    })
  })
}

module.exports = writeToFile

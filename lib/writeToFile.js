'use strict'

var fs = require('fs')

function writeToFile (files, options, callback) {
  var message = []
  var elements = Object.keys(files).length
  var i = 0
  var path

  files.forEach(function (file) {
    path = options.storage.path + '/' + file.fileName
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

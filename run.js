'use strict'

var getPoliticians = require('./lib/getPoliticians.js')
var getCommittees = require('./lib/getCommittees.js')
var writeToFile = require('./lib/writeToFile.js')

function run (options, callback) {
  var files = []
  getPoliticians(options, function (err, politicians) {
    if (err) {
      console.log(err)
    } else {
      getCommittees(politicians, options, function (err, committees) {
        if (err) {
          console.log(err)
        } else {
          var politiciansFile = {
            fileName: 'politicians.json',
            data: politicians
          }
          var committeeFile = {
            fileName: 'politiciansCommittee.json',
            data: committees
          }
          files.push(politiciansFile)
          files.push(committeeFile)

          options.files = files
          options.storagePath = options.storage.path

          writeToFile(files, options, function (err, result) {
            if (err) {
              return callback(err, null)
            } else {
              return callback(null, result)
            }
          })
        }
      })
    }
  })
}

module.exports = run

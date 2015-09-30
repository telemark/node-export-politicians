'use strict'

var query = require('./lib/buildQuery.js')
var runQuery = require('./lib/runQuery.js')
var writeToFile = require('./lib/writeToFile.js')

function writePoliticiansToFile (callback) {
  // Runs query for all politicians against p360 database
  runQuery(query.allPoliticians, function (err, result) {
    if (err) {
      return callback(err)
    } else {
      var i = 0
      var elements = Object.keys(result).length

      // Insert politicians to file
      writeToFile('politicians', JSON.stringify(result, null, 2), function (err, result) {
        if (err) {
          return callback(err, null)
        } else {
          console.log(result)
        }
      })

      // Holds committees
      var committees = []
      var politicianCommitteesQuery

      // Loops through results and query politicians committees
      result.forEach(function (value) {
        // Build query for politician committees
        politicianCommitteesQuery = query.politicianCommittees.replace('@PARAM', value.recno)

        // Runs query for politician committees against p360 database
        runQuery(politicianCommitteesQuery, function (err, result) {
          i++
          if (err) {
            return callback(err, null)
          } else {
            // Push results to array
            committees.push(result)
            // If we reached end of file
            if (i === elements) {
              // Insert politician committees to file
              writeToFile('politiciansCommittee', JSON.stringify(committees, null, 2), function (err, result) {
                if (err) {
                  return callback(err, null)
                } else {
                  return callback(null, result)
                }
              })
            }
          }
        })
      })
    }
  })
}

writePoliticiansToFile(function (err, result) {
  if (err) {
    console.log(err)
    process.exit(1)
  } else {
    console.log(result)
    console.log('Finished')
    process.exit(0)
  }
})

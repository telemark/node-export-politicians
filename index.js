'use strict'

var query = require('./lib/buildQuery.js')
var runQuery = require('./lib/runQuery.js')
var writeToFile = require('./lib/writeToFile.js')

// Runs query for all politicians against p360 database
runQuery(query.allPoliticians, function (err, result) {
  if (err) {
    console.error(err)
  } else {
    var politicianCommittees = null
    var recnr = null
    var i = 0
    var elements = Object.keys(result).length

    // Insert politicians to file
    writeToFile('politicians', JSON.stringify(result, null, 2), function (err, result) {
      if (err) {
        console.error(err)
      } else {
        console.log(result)
      }
    })

    // Holds committees
    var committees = []

    // Loops through results and query politicians committees
    result.forEach(function (value) {
      // Build query for politician committees
      recnr = value.recno
      politicianCommittees = query.politicianCommittees + ' and X5.ct_recno  =' + recnr + '))'

      // Runs query for politician committees against p360 database
      runQuery(politicianCommittees, function (err, result) {
        i++
        if (err) {
          console.error(err)
        } else {
          // Push results to array
          committees.push(result)
          // If we reached end of file
          if (i === elements) {
            // Insert politician committees to file
            writeToFile('politiciansCommittee', JSON.stringify(committees, null, 2), function (err, result) {
              if (err) {
                console.error(err)
              } else {
                console.log(result)
                console.log('Finished')
                process.exit(0)
              }
            })
          }
        }
      })
    })
  }
})

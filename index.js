'use strict'

var query = require('./lib/buildQuery.js')
var runQuery = require('./lib/runQuery.js')
var dbInsert = require('./lib/writeToDb.js')
var cleanCollection = require('./lib/cleanDb.js')

cleanCollection('politicians', function (err, result) {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})

runQuery(query.allPoliticians, function (err, result) {
  if (err) {
    console.error(err)
  } else {
    var politicianCommittees, recnr = null

    // Insert politicians to db
    dbInsert(result, 'politicians', function (err, result) {
      if (err) {
        console.error(err)
      } else {
        console.log(result)
      }
    })
    result.forEach(function(value) {
      // Build query for politician committees
      recnr = value.ct_recno[0]
      politicianCommittees = query.politicianCommittees + ' and X5.ct_recno  =' + recnr + '))'

      runQuery(politicianCommittees, function (err, result) {
        if (err) {
          console.error(err)
        } else {
          dbInsert(result, 'politiciansCommittees', function (err, result) {
            if (err) {
              console.error(err)
            } else {
              console.log(result)
            }
          })
        }
      })
    })
  }
})

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

cleanCollection('politiciansCommittees', function (err, result) {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})

// Runs query for all politicians against p360 database
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

      // Runs query for politician committees in p360 database
      runQuery(politicianCommittees, function (err, result) {
        if (err) {
          console.error(err)
        } else {
          // Insert politician committees to db
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

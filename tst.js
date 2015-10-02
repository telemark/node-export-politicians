'use strict'

var preparePoliticians = require('./lib/preparePoliticians')
var updateItems = require('./lib/updateItems')
var unwrapPoliticians = require('./lib/unwrapPoliticians')
var writeToFile = require('./lib/writeToFile')
var politicians = require('./data/politicians.json')
var committees = require('./data/politiciansCommittee.json')
var indexedObject = preparePoliticians({
  list: politicians,
  keyField: 'recno'
})
var updatedObject = updateItems({
  list: committees,
  keyField: 'recno',
  indexedObject: indexedObject
})

var unwrappedList = unwrapPoliticians(updatedObject)

console.log(unwrappedList)

writeToFile('mergedData', JSON.stringify(unwrappedList), function (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})

console.log('Finished')

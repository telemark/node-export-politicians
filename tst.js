'use strict'

var preparePoliticians = require('./lib/preparePoliticians')
var updateItems = require('./lib/updateItems')
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

console.log(updatedObject)

console.log('Finished')

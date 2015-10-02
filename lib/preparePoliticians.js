'use strict'

function preparePolitictians (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.list) {
    throw new Error('Missing required input: options.list')
  }
  if (!Array.isArray(options.list)) {
    throw new Error('Wrong input type. options.list must be an array')
  }
  if (!options.keyField) {
    throw new Error('Missing required input: options.keyField')
  }
  var indexedObject = {}
  options.list.forEach(function (item) {
    indexedObject[item[options.keyField]] = item
  })

  return indexedObject
}

module.exports = preparePolitictians

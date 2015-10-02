'use strict'

function updateItems (options) {
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
  if (!options.indexedObject) {
    throw new Error('Missing required input: options.indexedObject')
  }

  options.list.forEach(function (item) {
    item.forEach(function (committe) {
      if (options.indexedObject[committe[options.keyField]]) {
        if (options.indexedObject[committe[options.keyField]].hasOwnProperty('committees')) {
          options.indexedObject[committe[options.keyField]]['committees'].push(committe)
        } else {
          options.indexedObject[committe[options.keyField]]['committees'] = [committe]
        }
      } else {
        console.log('Missing politician: ' + committe.recno)
      }
    })
  })

  return options.indexedObject
}

module.exports = updateItems

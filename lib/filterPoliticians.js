'use strict'

function filterPoliticians (unfilteredList) {
  var filteredList = []
  unfilteredList.forEach(function (politician) {
    if (politician.committees.length > 0) {
      filteredList.push(politician)
    }
  })
  return filteredList
}

module.exports = filterPoliticians

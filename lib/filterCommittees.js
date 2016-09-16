'use strict'

var validCommitteeIds = [222101, 220291, 218688, 217299, 217344, 217337, 216162, 217338, 217336, 216167, 217335, 217342, 217345, 217340, 217339, 217341, 217642, 214617, 214712, 200123, 200119, 200122, 200024, 200125, 200124, 200120]

function getFilteredCommittees (committeesList) {
  var committees = []
  if (committeesList) {
    committeesList.forEach(function (committee) {
      if (validCommitteeIds.indexOf(committee.groupRecno) > -1) {
        var reg = committee.name.replace(/\([^)]*\)/, '')
        committee.name = reg.replace(/\s+$/, '')
        committees.push(committee)
      }
    })
  }
  return committees
}

function filterCommittees (unfilteredList) {
  var filteredList = []
  unfilteredList.forEach(function (politician) {
    politician.committees = getFilteredCommittees(politician.committees)
    filteredList.push(politician)
  })
  return filteredList
}

module.exports = filterCommittees

// Code your solution here
function findMatching(driverNames, searchName) {
    const result = driverNames.filter(name => name.toUpperCase() === searchName.toUpperCase())
    return result
}

function fuzzyMatch(driverNames, searchName) {
    const searchLength = searchName.length
    const result = driverNames.filter(name => name.substring(0, searchLength) === searchName.substring(0, searchLength))
    return result
  }

function matchName(driverList, name) {
    const result = driverList.filter(driver => driver.name === name)
    return result
}
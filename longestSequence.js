
function longestSequence(str) {

  // Split string into an array and make lowercase
  const arr = str.toLowerCase().split('')

  // Put in alphabetical order
  arr.sort()

  // Create an array of lengths
  const lengths = arr.map(function(a) {
    return arr.filter(function(b) {
      return a === b
    }).length
  })

  // Get first index of highest length
  const commonItemIndex = lengths.indexOf(Math.max.apply(null, lengths))

  // Find most occuring letter
  const mostCommonItem = arr[commonItemIndex]

  // Create new object
  const obj = { [mostCommonItem]: lengths[commonItemIndex] }

  return obj
}

// Examples
console.log(longestSequence('hhysYYkkssaaAA'))
console.log(longestSequence('testsTriNG'))
console.log(longestSequence('abcd'))

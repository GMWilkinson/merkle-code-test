
function secondLowestFrequency(arr) {

  // Put in numerical order
  arr.sort()

  // Create an array of arrays
  const lengths = arr.map(function(a) {
    return arr.filter(function(b) {
      return a === b
    })
  })

  // Get index of the longest array and use it to check lengths of all arrays and push the longest into a new array
  const eArr = []
  const indexOfLongestArr = lengths.reduce(function(maxI, el, i, arr) {
    return el.length > arr[maxI].length ? i : maxI
  }, 0)
  lengths.forEach(item => {
    if (item.length === lengths[indexOfLongestArr].length) {
      eArr.push(item[0])
    }
  })

  // Remove all duplicates and if length is not 0, remove first item and return the first item of what is left over
  const removedDuplicates = [...new Set(eArr)]
  if (removedDuplicates.length === 1) {
    return eArr[0]
  } else {
    removedDuplicates.shift()
    return removedDuplicates[0]
  }
}

// Examples
console.log(secondLowestFrequency([4, 3, 3, 3, 3, 3, 1, 1, 1, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9]))
console.log(secondLowestFrequency([4, 3, 2, 1, 6, 9, 7]))
console.log(secondLowestFrequency([4]))

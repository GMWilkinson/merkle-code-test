
// This one was a real curveball, I hope this is right

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)
}

// Examples
console.log(reverseString('h'))
console.log(reverseString('hello'))
console.log(reverseString(''))
console.log(reverseString('racecar'))

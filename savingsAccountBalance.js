
// Not much to comment on as it is pretty much self explanatory

function savingsAccBalance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
  let balance = openingSum
  for (let i = 1; i <= numMonths; i++) {
    if (balance > taxFreeLimit) {
      const tax = ((taxRate / 100) * (balance - taxFreeLimit))
      balance = balance + ((interestRate / 100) * balance)
      balance = balance - tax
    } else {
      balance = balance + ((interestRate / 100) * balance)
    }
  }
  return balance
}

// Examples
console.log(savingsAccBalance(10000, 1, 20000, 1, 2))
console.log(savingsAccBalance(19800, 2, 20000, 1, 2))
console.log(savingsAccBalance(25000, 2, 20000, 1, 2))

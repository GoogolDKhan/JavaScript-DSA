# JavaScript Algorithms and Data Structures

## Palindrome Checker
- A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
- `palindrome("A man, a plan, a canal. Panama")` returns `true`
- `palindrome("1 eye for of 1 eye.")` returns `false`

## Roman Numeral Converter
- `convertToRoman(1023)` returns the string `MXXIII`
- `convertToRoman(3999)` returns the string `MMMCMXCIX`

## Caesars Cipher
- `rot13("SERR CVMMN!")` decodes to the string `FREE PIZZA!`
- `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` decodes to the string `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG`

## Telephone Number Validator
- `telephoneCheck("1 555-555-5555")` returns `true`
- `telephoneCheck("2(757)6227382")` returns `false`

## Cash Register
- `checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` returns `{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}`
- `checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` returns `{status: "INSUFFICIENT_FUNDS", change: []}`

## Author

- [@Sarfaraz](https://www.github.com/GoogolDKhan)

- Dated : 04-06-2021

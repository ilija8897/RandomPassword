import { generatePassword } from './passwordGenerator.js'

console.log(generatePassword(8, 1))
console.log(generatePassword(12, 123))

console.log(generatePassword(12, 123, { useSpecial: true }))
console.log(generatePassword(8, 1, { useUppercase: false, useDigits: false }))

console.log(generatePassword(-3, 42))
console.log(generatePassword(8, 0) === generatePassword(8, 1))
console.log(generatePassword(8, -42) === generatePassword(8, 42))
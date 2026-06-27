const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const DIGITS = '0123456789'
const SPECIAL = '!@#$%^&*'

const nextRandom = (number) => (16807 * number) % 2147483647;

export const generatePassword = (length, seed, options = {}) => {
    if (length <= 0) return ''
    if (seed === 0) seed = 1
    seed = Math.abs(seed)

    const { useUppercase = true, useDigits = true, useSpecial = false } = options;
    let alphabet = LOWERCASE;

    if (useUppercase) alphabet += UPPERCASE;
    if (useDigits) alphabet += DIGITS;
    if (useSpecial) alphabet += SPECIAL;
    let current = seed
    let result = ""
    for(let i=0; i <= length-1; i++) {
        current = nextRandom(current)
        const index = current % alphabet.length
    
        result = result + alphabet[index]
    }
    return result
}

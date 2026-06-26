const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';

const generatePassword = (length, { useUppercase = true, useDigits = true }) => {
    const alphabet = LOWERCASE
    let result = ""
    for(let i=0; i <= length-1; i++) {
        const index = i % alphabet.length
    
        result = result + alphabet[index]
    }
    return result
}

export { generatePassword };
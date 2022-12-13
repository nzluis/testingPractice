function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
}

function reverseString(word) {
    return word.split('').reverse().join('')
}

const calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    divide: function(a,b) {
        return a / b
    },
    multiply: function(a,b) {
        return a * b
    }
}

function caesarCipher(string, shift = 1) {
    // if (shift <1 || shift>25) return 'Wrong Shift Number, please choose between 1-25' 
    let finalString = ''
    let code = 0
    function convertIntoRange(code, character) {
        return character > 64 && character < 91
        ? code > 90 ? code -26 :  code
        : code > 122 ? code -26 :  code
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[a-zA-Z]/g)) {
            code = string[i].charCodeAt() + shift
            code = convertIntoRange(code, string[i].charCodeAt())
            finalString += String.fromCharCode(code)
        } else finalString += string[i]
    }
    return finalString
}

function analyzeArray(array) {
    const average = () => {
        return ([...array].reduce((sum, curr) => sum += curr, 0))/array.length
    }
    const min = () => {
        return Math.min(...array)
    }
    const max = () => {
        return Math.max(...array)
    }
    const length = () => {
        return array.length
    }
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: length(array)
    }
}
module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray}
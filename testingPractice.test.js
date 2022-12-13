const { capitalize,
        reverseString,
        calculator,
        caesarCipher,
        analyzeArray
    } = require('./testingPractice')

test('capitalized string', () => {
    expect(capitalize('home')).toEqual('Home')
})

test('reversed string', () => {
    expect(reverseString('home')).toEqual('emoh')
})

test('calculator functions', () => {
    const [a,b] = [45, 5]
    expect(calculator.add(a,b)).toEqual(50)
    expect(calculator.subtract(a,b)).toEqual(40)
    expect(calculator.divide(a,b)).toEqual(9)
    expect(calculator.multiply(a,b)).toEqual(225)
})

test('caesar cipher: shifting down the letters', () => {
    expect(caesarCipher('defend the east wall of the castle'))
    .toEqual('efgfoe uif fbtu xbmm pg uif dbtumf')
    expect(caesarCipher('z'))
    .toEqual('a')
    expect(caesarCipher('a1!"º<ç´+`-.,*a'))
    .toEqual('b1!"º<ç´+`-.,*b')
})

test('analyzing array to check avg, min, max & length', () => {
    expect(analyzeArray([1,8,3,4,2,6]))
    .toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
      })
})
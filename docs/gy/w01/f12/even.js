const array = [3, 5, 12, -8, 4, 1]

console.log(`Even numbers: \
${array.reduce((a, b) => a + (b % 2 == 0 ? 1 : 0), 0)}.`)

const countA = str => {
	let count = 0
	for (const chr of str)
		if ('a' === chr)
			++count
	return count
}

console.log('countA("adam")')
console.log( countA("adam") )
console.log("// → 2")

console.log('countA("apple")')
console.log( countA("apple") )
console.log("// → 1")

const count = (str, fn = chr => 'a' === chr) => {
	let db = 0
	for (const chr of str)
		if ( fn(chr) )
			++db
	return db
}

console.log('count("adam")')
console.log( count("adam") )
console.log("// → 2")

console.log('count("apple")')
console.log( count("apple") )
console.log("// → 1")

console.log("count(\"apple\", chr => 'p' === chr)")
console.log( count("apple", chr => 'p' === chr) )
console.log("// → 1")

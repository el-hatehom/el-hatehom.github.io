const lkkt = (a, b) => {
	let x = a
	let y = b
	while (x !== y)
		if (x < y)
			x += a
		else
			y += b
	return x
}

console.log(`lkkt(4, 3): ${lkkt(4, 3)}.`)
console.log(`lkkt(6, 9): ${lkkt(6, 9)}.`)
console.log(`lkkt(1024, 2): ${lkkt(1024, 2)}.`)

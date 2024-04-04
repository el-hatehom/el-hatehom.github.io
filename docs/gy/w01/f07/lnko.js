const lnko = (a, b) => {
	if (a < b)
		[a, b] = [b, a]
	let maradék = a % b
	while (maradék > 0) {
		a = b
		b = maradék
		maradék = a % b
	}
	return b
}

console.log(`lnko(12,38): ${lnko(12, 38)}.`)

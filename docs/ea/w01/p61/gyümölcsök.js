const gyümölcsök = [
	"alma",
	"körte",
	"szilva"
]

//A gyümölcsök kiírása a konzolra
for (let i = 0; i < gyümölcsök.length; ++i)
	console.log(gyümölcsök[i])

// for..of ciklus (ES6)
for (const gyümölcs of gyümölcsök)
	console.log(gyümölcs)

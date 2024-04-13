// Adatszerkezetek
const books = [
	{
		title: "Anna Karenina",
		year: 1877
	},
	{
		title: "Harry Potter és a bölcsek köve",
		year: 1997
	}
]

// Tömbfüggvények
const booksOf1800s = books
	.filter(book => 1800 <= book.year && book.year < 1900)
const booksOf1900s = books
	.filter(book => 1900 <= book.year && book.year < 2000)

console.log(booksOf1800s)
console.log(booksOf1900s)

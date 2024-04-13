class Library {
	books = [
		{
			title: "A case for Christ",
			author: "Lee Strobel"
		}
	]
	booksByAuthor(author) {
		return this.books.filter(book => author === book.author)
	}
}

const lib = new Library()
const strobels = lib.booksByAuthor("Lee Strobel")
console.log( strobels.map(book => book.title).join('\n') )

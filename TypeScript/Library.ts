// Task: Modeling a Library

// Create a TypeScript program to model a library that contains books. You'll define
// classes and interfaces to represent books and library operations.

// 1. Define an interface called Book with the following properties:

// title (string)
// author (string)
// publishedYear (number)
// isCheckedOut (boolean)

// 2. Create a class called Library with the following properties and methods:

// name (string): The name of the library.
// books (an array of Book objects): The list of books in the library.
// addBook(book: Book): void: A method to add a book to the library's collection.
// checkoutBook(title: string): void: A method that takes a book title and marks it as checked out.
// returnBook(title: string): void: A method that takes a book title and marks it as returned.

// 3. Create an instance of the Library class and add several books to it using the addBook method.

// 4. Use the checkoutBook method to check out a book by title and then use the returnBook
//    method to mark it as returned.

// 5. Display the current state of the library, showing which books are checked out and which are available.

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isCheckedOut: boolean;
}

class Library {
	name: string;
	books: Book[] = [];
	constructor(name) {
		this.name = name;
	}

	addBook(book: Book) {
		this.books.push(book);
	}

	checkoutBook(title: string) {
		const book = this.books.find((book) => book.title === title);
		if (book) {
			if (!book.isCheckedOut) {
				book.isCheckedOut = true;
				console.log(`"${book.title}" has been checked out`);
			} else {
				console.log(`"${book.title}" is already checked out`);
			}
		} else {
			console.log(`"${title}" not present in the library`);
		}
	}

	returnBook(title: string): void {
		const book = this.books.find((b) => b.title === title);
		if (book) {
			if (book.isCheckedOut) {
				book.isCheckedOut = false;
				console.log(`"${title}" has been returned.`);
			} else {
				console.log(`"${title}" is not checked out.`);
			}
		} else {
			console.log(`"${title}" is not found in the library.`);
		}
	}

	displayLibrary(): void {
		console.log(`Library Name: ${this.name}`);
		console.log('Books in Library:');
		this.books.forEach((book) => {
			const status = book.isCheckedOut ? 'Checked Out' : 'Available';
			console.log(
				`Title: ${book.title}, Author: ${book.author}, Status: ${status}`
			);
		});
	}
}

const myLibrary = new Library('My Public Library');

myLibrary.addBook({
	title: 'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	publishedYear: 1925,
	isCheckedOut: false,
});

myLibrary.addBook({
	title: 'To Kill a Mockingbird',
	author: 'Harper Lee',
	publishedYear: 1960,
	isCheckedOut: false,
});

myLibrary.checkoutBook('The Great Gatsby');
myLibrary.returnBook('The Great Gatsby');

myLibrary.displayLibrary();

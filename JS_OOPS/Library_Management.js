class Library {
constructor() {
this.books = [];
}


addBook(book) {
this.books.push(book);
}


getAvailableBooks() {
return this.books.filter(b => b.available);
}


searchByAuthor(author) {
return this.books.find(b => b.author.toLowerCase() === author.toLowerCase());
}
}


const lib = new Library();
lib.addBook({ title: 'The Hobbit', author: 'J.R.R. Tolkien', available: true });
lib.addBook({ title: '1984', author: 'George Orwell', available: false });
lib.addBook({ title: 'Foundation', author: 'Isaac Asimov', available: true });


console.log('\nQ1 — Available books:', lib.getAvailableBooks());
console.log('Q1 — Search by author (Orwell):', lib.searchByAuthor('George Orwell'));


const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book) {
      if (!book.title || !book.author || !book.year) {
        console.log("Book information is incomplete. Please provide title, author, and year.");
        return;
      }
      
      const existingBook = this.books.find(b => b.title === book.title);
      if (existingBook) {
        console.log(`The book "${book.title}" already exists in the library.`);
        return;
      }
  
      this.books.push(book);
      console.log(`"${book.title}" added to the library.`);
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
  
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`"${title}" removed from the library.`);
      } else {
        console.log("Book not found.");
      }
    }
  };
  
  library.addBook({ author: "George Orwell", year: 1949 });
  console.log(library.books.length);
  
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  console.log(library.books.length);
  
  library.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 });
  console.log(library.books.length);
  
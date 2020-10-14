class Book {
  constructor(name, authors, edition) {
    this.name = name;
    this.authors = authors;
    this.edition = edition;
  }
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
  "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);

//----------------------------- Library Class --------------

class Library {
  constructor() {
    this.list = [];
  }

  shelve(book) {
    if (!(book instanceof Book)) {
      console.log('Can only shelve books')
      return;
    } 
    this.list.push(book);
    return this;
  }

  findByTitle(search) {
    for (let book of this.list) {
      const normalizedName = book.name.toLowerCase();
      const normalizedSearch = search.toLowerCase();
      if (normalizedName.includes(normalizedSearch)) {
        return book;
      }
    }
  }
}

const lib = new Library();
// lib.shelve(eloquentJS).shelve(speakingJS);
// console.log(lib);
console.log(lib.findByTitle("que"));

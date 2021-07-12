class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
      if (this.state > 100) {
        this.state = 100
    }
  }
 
  set state (numb) {
    if (numb < 0) {
      this._state = 0;
    } else if (numb > 100) {
      this._state = 100;
    }
    this._state = numb;
  }
 
  get state () {
    return this._state; 
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value)  {
    for (let prop of this.books) {
      if (prop.hasOwnProperty(type) === true && prop[type] === value) {
        return prop
        // return prop.name(?)
      } 
    }
    return null;
  }

  giveBookByName(bookName)  {
    for (let prop of this.books) {
      if (prop.name === bookName) {
        this.books.splice(prop,1)
        return prop
      } 
    }
    return null;
  }
}




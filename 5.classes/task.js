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
      this.state = 0;
    } else if (numb > 100) {
      this.state = 100;
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
    this.type = "Book";
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

class Library extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (this.state >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value)  {
    this.books.forEach((elem) => {
      // console.log(elem)
      for (let key in elem) {
        // console.log(elem)
        if (key === type && value === elem[key]) {
        // console.log(elem.name)
        return elem.name;
       }
      }
    })
    return null;
  }

  giveBookByName(bookName) {
    this.books.forEach((elem) => {
      for (let key in elem) {
        if (bookName === elem[key]) {
        return this.books.splice(elem,1)
       }
      }
    })
    return null;
  }
}




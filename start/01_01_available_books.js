// Write your code here
class Book {
  constructor(title, author, IBSN, numCopies = 10) {
    this.title = title;
    this.author = author;
    this.IBSN = IBSN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies <= 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock";
    } else {
      return "In Stock";
    }
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

const book = new Book("Harry Potter: The Return of the King", "Frank Turek", 420)

console.log(book);
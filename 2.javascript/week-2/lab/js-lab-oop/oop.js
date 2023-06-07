// class Student {
//     constructor(name) {
//         return 'Hello World'
//     }
    
//     greeting(name) {
//         return `Good morning ${name}`
//     }
// }
// let student1 = new Student('a')
// let student2 = new Student('b')
// let student3 = new Student('c')
// let student4 = new Student('d')
// let student5 = new Student('e')
// console.log(student1.greeting('student1'))

// class Car {
//     carDetails() {
//         return 'Here are details of this car'
//     }
// }
// class Hybrid extends Car {
//     carType() {
//         return 'I am a hybrid car'
//     }
// } 
// class Electric extends Car {
//     carType() {
//         return 'I am an electric car' 
//     }
// }
class BookList {
    constructor(amountRead = ``, amountUnread = ``, books = []) {
        this.amountRead = amountRead
        this.amountUnread = amountUnread
        this.books = books
    }
    addBook(book){
        this.books.push(book)
        console.log(this.books)
    }
}
class Book{
    constructor(title, genre, author, hasBeenRead, currentPage, totalPages) {
        this.title = title
        this.genre = genre
        this.author = author
        this.hasBeenRead = hasBeenRead
        this.currentPage = currentPage
        this.totalPages=totalPages
    }
    readingSession(pages) {
        this.currentPage += pages
        this.hasBeenRead = this.totalPages === this.currentPage ? true : false
        return this.totalPages === this.currentPage ? `you finished` : this.currentPage
    }
}
let nativeSon = new Book(`Native Son`, `realness`, `richard`, false, 0, 311);
let artWar = new Book(`Art of War`, `self-help`, `sun-tzu`, false, 0, 99) 

export default BookList
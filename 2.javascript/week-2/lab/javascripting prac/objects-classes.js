// function car(make, model, year, mpg) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.mpg = mpg;
//     this.moveConveyor = function () {
//         conveyorPostion +=1
//     }
// }
// let prius = new car('toyota', 'prius', 2011, 51)
// let priusPrime = new car('toyota', 'prius prime', 2015,41)
// console.log(prius)
// console.log(prius.mpg)
// let car = {
//     make: 'Toyota',
//     model: 'Prius',
//     year: 2011,
//     currentFuelAmountInGallons: 11.2,
//     driveForward: function () {
//         this.currentFuelAmountInGallons-=.01
//     },
//     checkFuelAmount: function () {
//         return this.currentFuelAmountInGallons
//     },
// }

// car.driveForward();
// car.driveForward();
// car.driveForward();
// car.driveForward();
// console.log(car.checkFuelAmount())
// class Car {
//     constructor(make, model, year, mpg, currentFuelLevel, fuelCapacity) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.mpg = mpg;
//         this.currentFuelLevel = currentFuelLevel;
//         this.fuelCapacity = fuelCapacity;
//     }
//     fillUp() {
//         this.currentFuelLevel = this.fuelCapacity
//     }
// }
// class Hybrid extends Car{
//     saveThePlanet() {
//         return 'Take it easy, you were born here'
//     }
// }
// let supra = new Car('toyota', 'supra mk4', 1998, 20, 15, 25)
// console.log(supra)
// let prius = new Hybrid('toyota', 'prius', 2011, 51, 6, 11.2)
// console.log(prius)

class BookList {
    constructor(numBookRead, numBookUnread, currentBook) {
        this.numBookRead = numBookRead;
        this.numBookUnread = numBookUnread;
        this.currentBook = currentBook;
    }
    addBook(book) {
        
    }
    finishCurrentBook() {
        
    }
}
class Book {
    constructor(title, genre, author, hasBeenread) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.hasBeenread = hasBeenread;
    }
}

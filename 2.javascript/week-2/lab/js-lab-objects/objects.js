let book = {
    title: "To Kill a Mocking Bird",
    author: "Harper Lee",
    pages: 281,
};
let person = {
    name: "Jane",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
    },
};
// console.log(person.name)
// console.log(person.address.city)
// console.log(person.address.state)
// person.name = 'Jane Doe'
// console.log(person.name)
// person.address.street = '456 Main St'
// console.log(person.address.street)
// delete person.address.zip
// console.log(person.address.zip)
let phonebook_obj = {
    Alice: "703-493-1834",
    Bob: "857-384-1234",
    Elizabeth: "484-584-2923",
};
// console.log(phonebook_obj.Elizabeth)
// phonebook_obj.Kareem = '938-489-1234'
// console.log(phonebook_obj)
// delete phonebook_obj.Alice
// console.log(phonebook_obj.Alice)
// console.log(phonebook_obj)
ramit = {
    name: "Ramit",
    email: "ramit@gmail.com",
    interests: ["movies", "tennis"],
    friends: [
        {
            name: "Jasmine",
            email: "jasmine@yahoo.com",
            interests: ["photography", "tennis"],
        },
        {
            name: "Jan",
            email: "jan@hotmail.com",
            interests: ["movies", "tv"],
        },
    ],
};
// console.log(ramit.email)
// console.log(ramit.interests[0])
// console.log(ramit.friends[0].email)
// console.log(ramit.friends[1].interests[1])
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
// ageArray = () => {
//     emptyArray = []
//     people.filter(a => {
//         emptyArray.push(a.age)
//     })
//     console.log(emptyArray)
// }
// ageArray()

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
];
// titleArray = () => {
//     emptyArray = [];
//     books.filter((a) => {
//         emptyArray.push(a.title);
//     });
//     console.log(emptyArray);
// };
// titleArray();
const cars = [
    { make: "Toyota", model: "Corolla", color: "red" },
    { make: "Honda", model: "Civic", color: "blue" },
    { make: "Ford", model: "F-150", color: "black" },
];
// colorArray = () => {
//     emptyArray = [];
//     cars.filter((car) => {
//         emptyArray.push(car.color);
//     });
//     console.log(emptyArray);
// };
// colorArray();
// colorArray = () => {
//     emptyArray = [];
//     cars.forEach(car => {
//         emptyArray.push(car.color);
//     });
//     console.log(emptyArray);
// };
// colorArray();
console.log(cars.map(car => car.color))

class User {
    constructor(firstName=``, lastName=``, address=[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    addAddress(address) {
        return this.address.push(address) 
    }
    dislayAddresses() {
        return this.address
    }
}
class Address {
    constructor(street=``, city=``, state=``, zipcode=10011) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
}

let home = new Address(`mulberry street`, `somecity`, `somestate`)

// console.log(home)
// let korre = new User(`korre`, `bailey`)
// console.log(korre)

// korre.addAddress(home)
// console.log(korre)

class Person
{   
    constructor(name, email, phone, friends=[]){
        this.name = name
        this.email = email
        this.phone = phone
        this.friends= friends
    }       
    greet(otherPerson){
        console.log(`Hello ${otherPerson}, I am ${this.name}!`)
    }
    showContact() {
        return `my email is ${this.email} and my number is ${this.phone}`
    }
    addFriend(name) {
        return this.friends.push(name)
    }
    friendCount() {
        return this.friends.length()
    }
}
let sonny = new Person(`Sonny`, `'sonny@hotmail.com'`, `483-485-4948`)
let jordan = new Person(`Jordan`, `jordan@aol.com`, `495-586-3456`)

// sonny.greet(`Jordan`)
// jordan.greet(`Sonny`)
// console.log(sonny.email)
// console.log(sonny.phone)
// console.log(jordan.email)
// console.log(jordan.phone)

// console.log(jordan.showContact())
// jordan.friends.push(sonny)
// console.log(sonny)
// sonny.addFriend('jordan')
// console.log(sonny)
// console.log(sonny.friends.length)

class BankAccount {
    constructor(balance,accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        this.balance -= amount
    }
    transferFunds(amount,newAccount) {
        this.balance -= amount
        newAccount += amount
    }
}
class checking extends BankAccount {
    constructor(balance, accountNumber, monthlyFee) {
        super(balance, accountNumber)
        this.monthlyFee = monthlyFee
    }
    giveAccountTypeDetails() {
        return `your monthly fee is $ ${this.monthlyFee}`
    }
}
let checking = new BankAccount(500, 'fd454')
checking.deposit(100)
checking.withdraw(200)
console.log(checking.balance);

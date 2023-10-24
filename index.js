const person1  = require("./models/registeredUsers")
const person2  = require("./models/registeredUsers2")


const Sam = person1.create({
    email: "sam@example.com",
    fullName: "Sam Smith",
    age: 30,
    employed: true
})

const john = person2.create({
    email: "john@example.com",
    fullName: "John Smith",
    age: 30,
    employed: true
})


// const users = await person.findAll();
console.log("users")
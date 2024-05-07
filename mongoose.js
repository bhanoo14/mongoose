const User = require('./User.js')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/myUsers"

mongoose.connect(url, () => console.log("Connected to Database"), (e) => {
    error.log(e.message)
})


const user = new User({
    name: "Bhaanoo Vishwakarma",
    age: 30,
    email: "151mc00003gmail.com",
})

user.save().then(() => {
    console.log("new User Data entry Successfull");
}).catch((e) => {
    console.log(e.message);
})

console.log("I am done Here");
const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    // useId: mongoose.Schema.ObjectId
})

module.exports = mongoose.model("User", userSchema)
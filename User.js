const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    email: {
        type: String,
        minLength: 10,
        maxlength: 50,
        validate: {
            validator: function (value) {
                return value.includes('@');
            },
            message: "Email should include '@' symbol."
        }
    },
    // useId: mongoose.Schema.ObjectId
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("User", userSchema)
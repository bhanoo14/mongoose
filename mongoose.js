// referencing an object

const { default: mongoose } = require("mongoose");

mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    mob: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myCollection'
    }
})
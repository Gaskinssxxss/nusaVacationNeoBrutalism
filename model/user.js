const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'monitoring'],
        default: 'admin'
    }
});

const User = mongoose.model("User", user);
module.exports = User;
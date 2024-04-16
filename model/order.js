const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Package = require("./package");

const order = new Schema({
    id: {
        type: String,
        required: true
    },
    idx: {
        type: Number,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    pax: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dp: {
        type: Number,
        required: false
    },
    dateTraveling: {
        type: String,
        required: true
    },
    dateRegistration: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Order = mongoose.model("Order", order);

module.exports = Order;

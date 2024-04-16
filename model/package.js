const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const package = new Schema({
    idx: {
        type: Number,
        required: true,
    },
    MainImg: {
        type: String,
        required: true,
    },
    img: {
        type: [String, String, String, String],
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    timeTrav : {
        type : String,
        require : false,
    },
    details: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
});

const Pacakge = mongoose.model("Package", package);
module.exports = Pacakge;
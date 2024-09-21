const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    bookImg: {
        type: String,
        required: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserProfile",
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;

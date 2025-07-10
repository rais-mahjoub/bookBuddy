const mongoose = require('mongoose');

const noteSchema = new mongoose.schema({
    book_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    note: {
        type: Number,
        required: true
    },
})
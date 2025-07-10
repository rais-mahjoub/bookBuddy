const mongoose = require('mongoose');

const progressSchema = new mongoose.schema({
    book_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    prog: {
        type: Number,
        required: false
    },
    status_id: {
        type: String
    }
})
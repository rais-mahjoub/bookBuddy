const mongoose = require('mongoose');

const commentSchema = new mongoose.schema({
    book_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date_heure: {
        type: String,
        required: true
    }
})
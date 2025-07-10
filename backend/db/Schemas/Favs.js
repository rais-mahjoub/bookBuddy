const mongoose = require('mongoose');

const favsSchema = new mongoose.schema({
    book_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})
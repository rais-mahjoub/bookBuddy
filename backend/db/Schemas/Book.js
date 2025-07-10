const mongoose = require('mongoose');

const bookSchema = new mongoose.schema({
    link: {
        type: URL,
        required: true
    },
    cover: {
        type: String,
        required: false
    },
    nbe_pages: {
        type: Number,
        required: false
    },
    author_id: {
        type: String,
        required: true
    }
})
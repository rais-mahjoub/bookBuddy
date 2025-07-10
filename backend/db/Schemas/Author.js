const mongoose = require('mongoose');

const authorSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    }
})
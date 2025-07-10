const mongoose = require('mongoose');

const categorySchema = new mongoose.schema({
    category: {
        type: String,
        required: true
    }
})
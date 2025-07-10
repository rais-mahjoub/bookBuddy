const mongoose = require('mongoose');

const statusSchema = new mongoose.schema({
    status: {               // En cours, Terminé
        type: String,
        required: true
    }
})
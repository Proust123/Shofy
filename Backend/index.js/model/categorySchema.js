const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    img : {
        type : String
    },
    name : {
        type : String
    }
})

module.exports = mongoose.model('category', categorySchema)
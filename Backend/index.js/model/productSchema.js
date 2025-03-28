const mongoose = require('mongoose')

const prodSchema = new mongoose.Schema({
    img : {
        type : String
    },
    option : {
        type : String
    },
    name : {
        type : String
    },
    rating : {
        type : Number
    },
    price : {
        type : Number
    },
})

module.exports = mongoose.model('prod', prodSchema)
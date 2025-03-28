const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    id : {
        type : String
    },
    name : {
        type : String
    },
    price : {
        type : Number
    },
    payStatus : {
        type : String
    },
    Status : {
        type : String
    },
    email : {
        type : String
    }
})

module.exports = mongoose.model('order', orderSchema)
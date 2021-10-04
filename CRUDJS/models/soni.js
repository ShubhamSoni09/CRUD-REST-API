const mongoose = require('mongoose')

const soniSchema = new mongoose.Schema({
    name: {
        type:String, 
        required: true,

    },
    tech: {
        type:String, 
        required: true,

    },
    subscription: {
        type:Boolean, 
        required: true,

    },
})
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const feedSchema = new Schema ({
    name : {
        type : String,
        min: [2, "Name must be longer"],
        max: 25,
        required: true
    },
    message : {
        type: String,
        max: 40,
        min: [2, "need longer message"],
        required: true
    },
    date : {
        type: String,
        required: true
    }
    
}, {timestamps:true})

const Feed = mongoose.model('Feed', feedSchema)

module.exports = {
    Feed
}
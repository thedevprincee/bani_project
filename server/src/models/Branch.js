const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BranchSchema = Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Branch', BranchSchema)
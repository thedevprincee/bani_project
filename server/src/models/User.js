const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    visualAccounts: [
        {
            logo: String,
            name: String,
            accountNo: Number,
            branch: {
                id: String,
                name: String,
                location: String
            },
            inflow: Number
        }
    ]
})

module.exports = mongoose.model('User', UserSchema)
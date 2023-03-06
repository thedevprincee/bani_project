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
    // branch: {
    //     name: String,
    //     location: String
    // },
    visualAccounts: [
        {
            logo: {
                type: String
            },
            name: {
                type: String
            },
            accountNo: {
                type: Number
            },
            inflow: {
                type: Number
            },

            // timestamps: {
            //     createdAt: new Date(),
            //     updatedAt: new Date()
            // }
        }
    ],
})

module.exports = mongoose.model('User', UserSchema)
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
    virtualAccounts: [
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
            branch: {
                name: {
                    type: String,
                },
                location: {
                    type: String,
                }
            },
            time : { 
                type : Date, 
                default: Date.now 
            }
        }

    ],
})

module.exports = mongoose.model('User', UserSchema)
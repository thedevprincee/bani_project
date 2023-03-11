const User = require("../models/User")
const jwt = require('jsonwebtoken')
const { NotFoundError } = require("../utils/apiError")

const addAccount = async (payload, token)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await findUserById({_id: verifiedUser._id})
    const newAccount = await User.findOneAndUpdate(
        {_id: verifiedUser._id},
        {$push: {visualAccounts: payload}},
        {returnOriginal: false}
    )
    return payload
}
const getAccounts = async (token)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await findUserById({_id: verifiedUser._id})
    return user.visualAccounts
}
const getAccount = async(visualId, token)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await findUserById({_id: verifiedUser._id})
    const account = user.visualAccounts.find(({_id})=>_id.toString() === visualId.toString() )
    return account
}
const deleteAccount = async(id, token)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await findUserById({_id: verifiedUser._id})
    const account = user.visualAccounts.filter((account)=>account._id !== account.id )
    return account
}

const getTokenFromUser = async(token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if (!decoded._id) {
        throw NotFoundError("User not found")
    }
    return serializeUser(decoded)
}


const serializeUser = (user)=>{
    return {
        _id: user?._id,
        email: user?.email
    }
}
async function findUserById(_id){
    return User.findOne({_id})
}
module.exports = {
    addAccount,
    getAccount,
    getAccounts,
    deleteAccount
}
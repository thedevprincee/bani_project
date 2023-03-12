const User = require("../models/User")
const jwt = require('jsonwebtoken')
const { NotFoundError } = require("../utils/apiError")

const addAccount = async (payload, token)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await findUserById({_id: verifiedUser._id})
    const newAccount = await User.findOneAndUpdate(
        {_id: verifiedUser._id},
        {$push: {virtualAccounts: payload}},
        {returnOriginal: false}
    )

    return newAccount.virtualAccounts
}
const getAccounts = async (token)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await findUserById({_id: verifiedUser._id})
    return user.virtualAccounts
}
const getAccount = async(virtualId, token)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await findUserById({_id: verifiedUser._id})
    const account = user.virtualAccounts.find(({_id})=>_id.toString() === virtualId.toString() )
    return account
}
const deleteAccount = async(virtualId, token)=>{
    const verifiedUser = await getTokenFromUser(token)
        const user = await User.findOneAndUpdate(
        {_id: verifiedUser._id}, 
        {$pull: {virtualAccounts: {_id: virtualId}}}, 
        {returnOriginal: false}
    )
    return user.virtualAccounts
}

const updateAccount = async(virtualId, token, payload)=>{
    const verifiedUser = await getTokenFromUser(token)
    const user = await User.findOneAndUpdate(
        {
            _id: verifiedUser._id
        }, 
        {$set: {"virtualAccounts.$[el1]": payload}},
        {
            arrayFilters:[
                {"el1._id": virtualId}
            ],
            returnOriginal: false
        } 
    )
    return user.virtualAccounts
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
    deleteAccount,
    updateAccount
}
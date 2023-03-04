const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {AuthenticationError, DefaultError} = require('../utils/apiError')

const addAccount = async (payload)=>{
    const {name, branch, accountno} = payload
    
}

const signUp = async (payload) =>{
    const {email, password, firstName, lastName} = payload 
    // Find user by mail
    const user = await findUserByMail(email)
    // Check if email/user already exists
    if(user) throw new AuthenticationError
    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        //Create a JWT token
        const token = jwt.sign(serializeUser(user), process.env.JWT_SECRET_KEY, {expiresIn: "1d"})
        // Create a New User
       const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            email,
            // jwtToken: token
        })
        return {
            user: serializeUser(newUser),
            token
        }
    } catch (error) {
        throw new DefaultError
    }
}
const login = async(payload)=>{
    const {email, password} = payload 
    // Find user by mail
    const user = await findUserByMail(email)
    if(user){
        // Compare hashed and inputed password
        const comparedPwd = await bcrypt.compare(password, user.password)
        if(comparedPwd){
            //Create a JWT token
            const token = jwt.sign(serializeUser(user), process.env.JWT_SECRET_KEY, {expiresIn: "1d"})
            return {
                user: serializeUser(user),
                token
            }
        } else{
            return null
        }
    }else {
        return null
    }
}

function serializeUser(user){
    return {
        _id: user?._id,
        email: user?.email,
    }
}
async function findUserByMail(email){
    return User.findOne({email})
}
module.exports = {
    signUp,
    login,
    addAccount
}

const { signUp, login } = require('../services/User')

const router = require('express').Router()

router.post('/signup', async(req, res)=>{
    const response = await signUp(req.body)
    if(response){
        return {
            message: "User successfully signed up",
            response: response
        }
    }
    return;
})
router.post('/login', async(req, res)=>{
    const response = await login(req.body) 
    if (response){
        return {
            message: "User successfully login",
            response: response
        }
    }
})

module.exports = router
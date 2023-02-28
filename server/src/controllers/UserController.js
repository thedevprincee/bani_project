const { signUp, login } = require('../services/User')
const AsyncWrapper = require('express-async-wrapper')
const router = require('express').Router()

router.post('/signup', AsyncWrapper( async(req, res)=>{
    const response = await signUp(req.body)
        if(response){
            res.status(201).json({
                message: "User successfully signed up",
                payload: response
            })
            return;
        }
}))

router.post('/login', AsyncWrapper(async(req, res)=>{
    const response = await login(req.body) 
    try {
        if (response){
            res.status(200).json({
                message: "User successfully login",
                response: response
            })
        }
        return;
        
    } catch (error) {
        console.log(error);
    }
}))

module.exports = router
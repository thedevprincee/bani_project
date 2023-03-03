<<<<<<< HEAD:server/src/controllers/UserController.js
const { signUp, login, addAccount } = require('../services/User')
=======
const { signUp, login } = require('../services/auth-service')
>>>>>>> 4eba15568bebf1cc3341a0d4242557487a8bd1cf:server/src/controllers/auth-controller.js
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

router.post('/add-account', async(req, res)=>{
    const response = await addAccount(req.body)
    try {
        if (response){
            res.status(200).json({
                message: "Victual Account successfully add",
                response: response
            })
        }
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router
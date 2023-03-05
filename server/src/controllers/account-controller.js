const router = require('express').Router()
const expressAsyncWrapper = require('express-async-wrapper')
const User = require('../models/User')
const { addAccount, getAccounts, getAccount } = require('../services/account-service')


router.post("/addaccount",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const response = await addAccount(req.body, authorization)
    if (response) {
        res.status(201).json({
            message: "Account Added Successfully",
            payload: response    
        })
    }
    return;
})
)
router.get("/accounts",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const response = await getAccounts(authorization)
    if (response) {
        res.status(200).json(response)
    }
    return;
})
)
router.get("/account/:id",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const id = req.params.id
    const response = await getAccount(id, authorization)
    if (response) {
        res.status(200).json(response)
    }
    return;
})
)
module.exports = router

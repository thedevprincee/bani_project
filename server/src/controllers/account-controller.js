const router = require('express').Router()
const expressAsyncWrapper = require('express-async-wrapper')
const User = require('../models/User')
const { addAccount, getAccounts, getAccount, deleteAccount, updateAccount } = require('../services/account-service')


router.post("/add_virtual",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const response = await addAccount(req.body, authorization)
    if (response) {
        res.status(201).json({
            status: "ok",
            message: "Account Added Successfully",
            payload: response    
        })
    }
    return;
})
)
router.get("/virtual",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const response = await getAccounts(authorization)
    if (response) {
        res.status(200).json(response)
    }
    return;
})
)
router.get("/virtual/:id",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const id = req.params.id
    const response = await getAccount(id, authorization)
    if (response) {
        res.status(200).json(response)
    }
    return;
})
)
router.delete("/virtual/:id",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const id = req.params.id
    const response = await deleteAccount(id, authorization)
    if (response) {
        res.status(200).json(response)
    }
    return;
})
)
router.patch("/virtual/:id",  expressAsyncWrapper( async(req, res)=>{
    const {authorization} = req.headers
    const id = req.params.id
    const response = await updateAccount(id, authorization, req.body)
    if (response) {
        res.status(200).json(response)
    }
    return;
})
)
module.exports = router

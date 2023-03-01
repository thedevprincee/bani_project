const router = require('express').Router()
const AsyncWrapper = require('express-async-wrapper')
const {addBranch, viewBranch, getBranchById} = require('../services/Branch')

router.post("/addbranch", AsyncWrapper( async(req, res)=>{
    addBranch(req.body)
    res.status(200).json({status: "ok", msg: "Successfully add new branch"})
}))

router.get("/", async(req, res)=>{
    const branch = await viewBranch()
    res.status(200).json({branch})
})

router.get("/:id", async (req, res)=>{
    const branch = await getBranchById(req.params.id)
    res.status(201).json({branch})
})

module.exports = router
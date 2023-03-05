const router = require('express').Router()
const AsyncWrapper = require('express-async-wrapper')
const {addBranch, viewBranch, getBranchById} = require('../services/Branch')

router.post("/addbranch", AsyncWrapper( async(req, res)=>{
    await addBranch(req.body)
    res.status(200).json({status: "ok", msg: "New branch successfully added"})
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
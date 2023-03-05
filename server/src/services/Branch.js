const Branch = require('../models/Branch')


const addBranch = async(payload)=>{
    const {name, location} = payload
    try {
        const newBranch = Branch({
            name, 
            location
        })
        return newBranch.save()

    } catch (error) {
        console.log(error);
    }
}

const viewBranch = async (req, res)=>{
    const branch = await Branch.find()
    return branch
}

const getBranchById = async (payload)=>{
    const branch = await Branch.findById(payload)
    return branch
}

module.exports = {addBranch, viewBranch, getBranchById}
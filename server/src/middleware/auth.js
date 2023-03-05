const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req,res,next)=>{
    const { authorization } = req.headers
    if (!authorization) return res.status(500).json({message: "This route requires a bearer token"});
	//get token
    const token = authorization.split(" ")[1]
	// 
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    
    if(decoded._id){
        try {
            const user = await User.findById({_id: decoded._id})
            if (user) {
                req.user = user
                return next()
            }else{
                return res.status(401).json({message: "Invalid token provided"})
            }
        } catch (error) {
            throw new Error(error)
        }
    } 
    return res.status(500).json({message: "malfunction token provided"}) 

}

module.exports = auth;

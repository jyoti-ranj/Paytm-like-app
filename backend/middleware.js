const jwt = require("jsonwebtoken")
const JWT_SECRET = require("./config");

const authMiddleware = (req,res,next) =>{
    const token = req.header('Authorization')?.replace('Bearer ', '').trim();

    if(!token){
        return res.status(403).json({message:"Access denied,No token provided."})
    }
    jwt.verify(token , JWT_SECRET , (err,decoded)=>{
        if(err){
            return res.status(403).json({ message: 'Invalid token.' });
        }
        req.userId = decoded.userId
        console.log("Received token:", token);

        next();
    })
}

module.exports = {
    authMiddleware
}
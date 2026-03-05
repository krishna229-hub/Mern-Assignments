import jwt from 'jsonwebtoken'

export function verifyToken(req,res,next){
    //token verification 
    let signedToken=req.cookies.token
    if(!signedToken){
        return res.status(401).json({message:"please login first"})

    }
    let decodedToken=jwt.verify(signedToken,"abcd")
    console.log("Decoded Token",decodedToken)
    next();
} 
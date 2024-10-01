import jwt from "jsonwebtoken";
import User from "../modals/userModel.js";


async function protectedRoute(req,res,next) {
    try{
      
    let token=req.cookies.jwt;

    if(!token){
        res.status(401).json({error:"Unauthorized user-No token"})
    }
    let verifyUser=jwt.verify(token,process.env.JWT_SECRET);

    if(!verifyUser){
        res.status(401).json({error:"Unauthorized user"});
    }

    const user=await User.findById(verifyUser.userId);

    if(!user){
        res.status(401).json({error:"User not found"}); 
    }
    req.user=user;
    next();
}
catch(error){
    console.log("protected route errror"+error)
    res.status(500).json({error:"Internal server error"});
}
}

export default protectedRoute;
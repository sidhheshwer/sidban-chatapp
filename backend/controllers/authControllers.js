import User from "../modals/userModel.js";
import bcrypt from "bcryptjs"
import generateTokenAndsetCookie from "../services/generateToken.js";
export   async function handleSignin(req,res){
    try{
    const { fullName,username,password,confirmPassword,gender }=req.body;

    if(password!==confirmPassword){
        res.status(400).json({error:"Password do not match"})
    }

    const user=await User.findOne({username})
    if(user){
        res.status(400).json({error:"user already exist"})
    }

    let salt=await bcrypt.genSalt(10);
    let hashPassword=await bcrypt.hash(password,salt);
    
    let boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;
    let girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;
    
    let newUser=new User({
        fullName:fullName,
        username:username,
        password:hashPassword,
        gender:gender,
        profilePic:gender==="male"?boyProfilePic:girlProfilePic
    });

    if(newUser){

        await generateTokenAndsetCookie(newUser._id,res);

    await newUser.save();
    res.status(200).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
    })
}
else{
    res.status(400).json({error:"invalid user data"})
}

}
catch(error){
    console.log("Error in signin controller:"+error.message);
    res.status(500).json({error:"Internal Server Error"})
}
   
}

export async function handleLogin(req,res){
   try {
    let {username,password}=req.body;
    let user=await User.findOne({username});
    
   let isPassword=await bcrypt.compare(password,user?.password||" ");

   
   if (!user||!isPassword) {
    return res.status(401).json({ error: "Invalid username or password" });
}

  

    

    await generateTokenAndsetCookie(user._id,res);
    res.status(200).json({
        _id:user._id,
        fullName:user.fullName,
        username:user.username,
        profilePic:user.profilePic
    });

   } catch (error) {
    
    console.log("Error in login controller:"+error.message);
    res.status(500).json({error:"Internal Server Error"});
   
   }
}

export  function handleLogout(req,res){
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logout successfully"})

    } catch (error) {
        console.log("Error in logout controller:"+error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}
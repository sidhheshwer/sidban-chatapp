import User from "../modals/userModel.js";

async function handleGetAllUsers(req,res) {
    try {
        let loginUser=req.user._id;
       
        let  getAllUsersForSidebar=await User.find({_id:{$ne :loginUser}}).select("-password");
        res.status(200).json(getAllUsersForSidebar);
    } catch (error) {
        console.log("error in handleGetAllUsers:"+error);
        res.status(500).json({error:"Internal server error"})
    }
}
export default handleGetAllUsers;
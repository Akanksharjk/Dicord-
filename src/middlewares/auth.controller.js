import userModel from "../models/user.model.js"
import sendFiles from "../services/storege.service.js"

export const registerUser = async (req, res)=>{
    const {username, email, password, dob, fullname, mobile_no} = req.body
    const file = req.file

    if(!username || !email || !fullname)
        return res.status(400).json({
        success:false,
        message:"field are required"
    })

    let uploadImage = null

    if(file){
        uploadImage = await sendFiles(file.buffer, file.originalname)
    }

    const user = await userModel.create({
        username,
        fullname,
        email,
        password,
        profile_pic:uploadImage.url,
        mobile_no,
        dob
    })
}
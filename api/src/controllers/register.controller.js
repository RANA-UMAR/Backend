import errorHandler from "../utils/errorHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js"
import {upload} from "../middleware/multer.middleware.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
const register = errorHandler(async (req,res)=>{
    // res.status(200).json({
    //     message:"done"
    // })


    const {fullName,email,username,password } = req.body;
    console.log("email",email);


    if
    (
        [fullName,username,email,password].some((field)=>field?.trim() === "")
    ){
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = User.findOne({
        $or:[{fullName},{email}]
    })
    if (existedUser){
        throw new ApiError (409,"User with email and username already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar File is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const cover = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar){
        throw new ApiError(400,"Avatar File is required")

    }

    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user")

    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered succesfully")
    )
})

export default register;
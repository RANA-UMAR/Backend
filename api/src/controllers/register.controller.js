import errorHandler from "../utils/errorHandler.js";

const register = errorHandler(async (req,res)=>{
    res.status(200).json({
        message:"done"
    })
})

export default register;
import {Router} from "express"
import register from "../controllers/register.controller"; 
import {upload} from "../middleware/multer.middleware.js"

const router = Router();

router.post("/register",
upload.fields([
    {
        name:"avatar",
        maxCount:1

    },
    {
        name:"coverImage",
        maxCount:1

    }
]),
register)

export default router;
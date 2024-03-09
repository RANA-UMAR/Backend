import express from "express";
import {PORT} from "./src/config/index.js"
import dbConnect from "./src/database/index.js";
import cors from "cors"

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        "msg":"port is working"
    })
})
const port = PORT;
dbConnect()

app.listen(port,()=>{
    console.log(`App is listening on the port ${port}`);
})

app.use(express.json())
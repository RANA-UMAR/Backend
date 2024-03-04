import express from "express";
import {PORT} from "./src/config/index.js"
import dbConnect from "./src/database/index.js";
const app = express();

const port = PORT;
dbConnect()
app.listen(port,()=>{
    console.log(`App is listening on the port ${port}`);
})


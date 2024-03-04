import mongoose from "mongoose";
import { MONGODB_URI } from "../config/index.js";


const dbConnect = async ()=>{
    try {
        const connect = await mongoose.connect(MONGODB_URI);
        console.log(`Database is connected to host successfully ${connect.connection.host} `);

        
    } catch (error) {
        console.log("Database is not connected" + error);
    }
}

export default dbConnect;
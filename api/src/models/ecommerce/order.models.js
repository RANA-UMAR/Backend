import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderprice:{
        type:Number,
        required:true,
    },
    cutomerDetail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIEVERED"],
        default:"PENDING",
    }

},{timestamps:true})


const Order = mongoose.model("Order",orderSchema)
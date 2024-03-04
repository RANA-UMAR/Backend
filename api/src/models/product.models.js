import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
        default:0,
    },
    productImage:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        default:0,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }

},{timestamps:true})

const Product = mongoose.model("Product",productSchema)
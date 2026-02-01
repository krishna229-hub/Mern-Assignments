import {Schema, SchemaType,model} from "mongoose"

//create product schema (productname,price,brand)
const productSchema=new Schema({

    productname:{
        type:String,
        required:[true,"Productname is required"],
        minLength:[4,"min length should be 4"],
        maxLength:[10,"max length should be 10"]
    },
    price:{
        type:Number,
        required:["Price of the product"]
        },
    brand:{
        type:String
    },
},{
    strict:"throw",
    timestamps:true

});

//Create User model with that schema
export const productModel=model("product",productSchema)

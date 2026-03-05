import {Schema,model} from "mongoose"
let productSchema=new Schema({

    prodname:{
        type:String,
        required:[true,"Procduct name is required"]
    },
    price:{
        type:Number,
        required:[true,"Price of the product is required"]
    },
    brand:{
        type:String

    }
},{
        strict:"throw",
        timestamps:true,
        versionKey:false
    
});



export const ProductModel=model("product",productSchema)
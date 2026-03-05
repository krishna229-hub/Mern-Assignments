import {Schema,model} from "mongoose";
// //create cart schema
//  const cartSchema=new Schema({
//      product:{
//          type:Schema.Types.ObjectId,
//          ref: "product" //name of the product model
//      }
//  })
//create cart schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number,
        default:0
    }
})

const userSchema=new Schema({

    name:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min char length is 4"],
        maxLength:[10,"Max char length is 10 "]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    // cart:{
    //     type:[cartSchema]
},{
        strict:"throw",
        timestamps:true,
        versionKey:false
    
})

export const UserModel=model("user",userSchema)
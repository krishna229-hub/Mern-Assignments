import {Schema,model} from "mongoose"

//Create user schema(username,password,age)
const userSchema=new Schema({

    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"Min length should be 4"],
        maxLength:[6,"Max length exceeded"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    age:{
        type:Number,
        required:[true,"Age is required "],
        min:[18,"age should be above 18"],
        max:[25,"age should be less than 25"]

    },
},{
    strict:"throw",
    timestamps:true

});

//Create User model with that schema
export const UserModel=model("user",userSchema)
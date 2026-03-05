import exp from "express"
import {UserModel} from '../Models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from "../middleware/verifyToken.js"
import { ProductModel } from "../Models/ProductModel.js"
//create mini express
export const userRoute=exp.Router()
let users=[]

//get req
userRoute.get('/users',async (req,res)=>{
    //
    let userList=await UserModel.find()
    // 
    res.status(200).json({message:"All users",payload:userList})
})
// //get req with ObjId
// userRoute.get('/users/:id',async (req,res)=>{
//     //params id
//     let ObjId=req.params.id
//     //find user in db
//     let userObj=await UserModel.findById(ObjId)
//     //Send res
//     res.status(200).json({message:"UserId",payload:userObj})
// })
//post req
userRoute.post('/users',async (req,res)=>{
    //
    let newUser=req.body
    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    //Convert plain password to hash pass
    newUser.password=hashedPassword
    //
    let newUserDoc=new UserModel(newUser)
    //
    await newUserDoc.save()
    //
    res.status(201).json({message:"user created"})
})
//Authentication
userRoute.post('/auth',async (req,res)=>{
    //updateuser
    let userCred=req.body
    //
    let userOfDB=await UserModel.findOne({name:userCred.name})
    //
    if(userOfDB===null){
        return res.status(404).json({message:"Username Invalid"})
    }
    //compare pass
    let status=await compare(userCred.password,userOfDB.password)
    //if not matched
    if(status===false){
        return res.status(404).json({message:"Password Invalid"})
    } 
    //create route signed token
    let signedToken=jwt.sign({name:userCred.name},"abcd",{expiresIn:30})
    //save token as httpOnly
    res.cookie('token',signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    });
    //send token in response
    res.status(200).json({message:"Login success"})
    });
    //test route
    userRoute.get('/test',verifyToken,async(req,res)=>{
        res.json({message:"Test route"})
    });
//update user
// userRoute.put('/users/:id',async (req,res)=>{
//     let objectId=req.params.id
//     //
//     let modifiedUser=req.body
    
//     let updateUser=await UserModel.findByIdAndUpdate(objectId,{$set:{...modifiedUser}},{new:true});

//     //
//     res.status(200).json({m})
// })

//
userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async (req,res)=>{
    //read uid and pid from url parameters
    let {uid,pid}=req.params; //{uid:"",pid:""}
    //perform the update
    let user=await UserModel.findById(uid)
    if(!user){
       return res.status(401).json({message:"User not found"})
    }
    //
    let product = await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"Product not found"})
    }
    //
    let modifiedUser=await UserModel.findByIdAndUpdate(
        uid,{$push:{cart:{product:pid}}},{new:true}).populate("cart.product")
    
    res.status(200).json({message:"modified User",modifiedUser})
    //
    let quantityOfDB=
})
//Read the user by id
userRoute.get('user/:uid',async(req,res)=>{
    let {uid}=req.params;

    //
    let userOBJ =await UserModel.findById(uid).populate("cart.product","prodName price")
    //
    res.status(200).json({message:'user',payload:userOBJ})
})
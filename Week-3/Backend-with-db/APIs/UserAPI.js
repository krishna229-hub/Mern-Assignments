import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import {verifyToken} from '../middlewares/verifyToken.js'
import jwt from 'jsonwebtoken'
//Create mini express application
export const userApp = exp.Router();
//local memory database
let users=[];

//create user apis
// get request
userApp.get('/users', async (req, res) => {
    //read users from db
    let userList= await UserModel.find()
    //send res
    res.status(200).json({message:"all users",payload: userList});
});

//get with objId
userApp.get('/users/:id',async (req,res)=>{
    //get object id from url params
    let objectId=req.params.id;
    //find user in database
    let userObj=await UserModel.findById(objectId)
    //send res
    res.status(201).json({message:"UserId",payload:userObj})
});

//post req
userApp.post('/users',async (req,res)=>{
    //get newuser from body
    let newUser=req.body;
    //hash the pass
    let hashedPassword=await hash(newUser.password,12)
    //replace plain pass with hash pass
    newUser.password=hashedPassword
    //create new user doc
    let newUserDoc=new UserModel(newUser)
    //saving db
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"user created"})
});

//user authentication(login) route
userApp.post('/auth',async (req,res)=>{
//updateuser
let userCred=req.body 
//check for username
let userOfDB=await UserModel.findOne({username:userCred.username})
//if not found
if(userOfDB===null){
    return res.status(404).json({message:"Invalid username"})
}
 //compare passwords
 let status=await compare(userCred.password,userOfDB.password)
 //if password not matched
 if(status===false){
    return res.status(404).json({message:"Invalid password"})
 }
 //create route signed token
 let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})
 //save token as httpOnly cookie
 res.cookie('token',signedToken,{
    httpOnly:true, //if it is httpOnly cookie
    secure:false,
    sameSite:"lax"
 })
 //send token in response
 res.status(200).json({message:"Login success"})
});
//test route
userApp.get("/test",verifyToken,async(req,res)=>{
    res.json({message:"Test route"})

})

userApp.put("/users/:id",async (req,res)=>{
    //get objectID from url params
    let objectID=req.params.id;
    //let modified user from req
    let modifiedUser=req.body;
    //make update
    let latestUser = await UserModel.findByIdAndUpdate(objectID,{$set:{...modifiedUser}},{new:true})
    //send res
    res.status(200).json({message:"User updated",payload:latestUser})
})
userApp.delete('/users/:id',async (req,res)=>{
    //get obj id from url params
    let ObjectID=req.params.id
    //delete user from db
    let deleteUser=await UserModel.findByIdAndDelete(ObjectID)
    //send res
    res.status(200).json({message:"User deleted",payload:deleteUser})
});

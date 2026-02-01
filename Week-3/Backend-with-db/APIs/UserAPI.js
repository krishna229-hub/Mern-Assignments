import exp from 'express'
import {UserModel} from '../models/UserModel.js'
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
    //create new user doc
    let newUserDoc=new UserModel(newUser)
    //saving db
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"user created"})
});
//updateuser 
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
})

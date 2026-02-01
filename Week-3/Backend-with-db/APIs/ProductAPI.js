import exp from 'express';
import {productModel} from '../models/ProductModel.js';
export const productApp=exp.Router();
let products=[];
//create product api
//get req
productApp.get('/products', async (req,res) => {
    //read products from db
    let productList= await productModel.find()
    //send res
    res.status(200).json({message:"Products",payload:productList})

});
//get with objId
productApp.get('/products/:id',async (req,res)=>{
    //get object id from url params
    let objectId=req.params.id;
    //find product in database
    let productObj=await productModel.findById(objectId)
    //send res
    res.status(201).json({message:"ProductId",payload:productObj})
});


//post req
productApp.post('/products',async (req,res)=>{
    //get newProduct from body
    let newProduct=req.body
    //create newProduct document
    let newProductDoc=new productModel(newProduct)
    //saving db
    await newProductDoc.save()
    //send res
     res.status(201).json({message:"product created"})
});
//update product
productApp.put('/products/:id',async (req,res)=>{
    //get obj id from url params
    let ObjectID=req.params.id;
    //let modified product from req
    let modifiedProduct=req.body 
    //make update
    let latestProduct=await productModel.findByIdAndUpdate(ObjectID,{$set:{...modifiedProduct}},{new:true})
    //send res
    res.status(200).json({message:"Product Update",payload:latestProduct})
});
//Del product
productApp.delete('/products/:id',async (req,res)=>{
    //get obj id from url params
    let ObjectID=req.params.id
    //delete product from db
    let deleteProduct=await productModel.findByIdAndDelete(ObjectID)
    //send res
    res.status(200).json({message:"Product deleted",payload:deleteProduct})
})













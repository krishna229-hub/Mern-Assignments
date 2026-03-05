import exp from 'express'
import {ProductModel} from '../Models/ProductModel.js'

export const prodRoute=exp.Router()
let products=[];

//prod get req
prodRoute.get('/products',async (req,res)=>{
    //
    let prodList= await ProductModel.find()
    //
    res.status(200).json({message:"all Products ",payload:prodList})
});
//
prodRoute.post('/products',async (req,res)=>{
    //
    let newProd=req.body
    //
    let newProdcDoc=new ProductModel(newProd)
    //
    await newProdcDoc.save()
    res.status(201).json({message:"Product created"})
});
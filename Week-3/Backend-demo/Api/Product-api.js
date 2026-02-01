import exp from 'express';
export const productApp = exp.Router();
//product apis
let products=[];

// get request
productApp.get('/products',(req,res)=>{
  res.status(200).json({message:"all products",payload:products});
})
productApp.get('/products/:id',(req,res)=>{
  let productId=req.params.id;
  let productObj=products.find(prod=>prod.id==productId);
  if(!productObj){
    return res.status(404).json({message:"product not found"});
  }
  res.status(200).json({message:"product found",payload:productObj});
})
// post request

productApp.post('/products',(req,res)=>{
  let newProduct=req.body;
  products.push(newProduct);
  res.status(201).json({message:"product created",payload:newProduct});
})
productApp.put('/products/:id',(req,res)=>{
  let modifiedProduct=req.body;
  let productIndex=products.findIndex(prodObj=>prodObj.id===modifiedProduct.id);
    if(productIndex===-1){     
       return res.status(404).json({message:"product not found"});
    }
    let deletedProduct=products.splice(productIndex,1,modifiedProduct);
    res.status(200).json({message:"product modified",payload:modifiedProduct});
})
productApp.delete('/products/:id',(req,res)=>{
  let productId=req.params.id;
  let productIndex=products.findIndex(prod=>prod.id==productId);
  if(productIndex===-1){
    return res.status(404).json({message:"product not found"}); 
  }
  products.splice(productIndex,1);
  res.status(200).json({message:"product deleted"});
})
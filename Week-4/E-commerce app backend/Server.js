//Create http server
import exp from "express"
import {connect} from 'mongoose'
import { userRoute } from "./APIs/UserAPI.js"
import { prodRoute } from "./APIs/ProductAPI.js"

const app=exp()
const port=4000
//conect to mongoDB db
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/ecom")
        console.log("Server connected to db")
        app.listen(port,()=>console.log("Server listenting to port 4000...."))

    }catch(err){
        console.log("Error to connect server",err)
    }
    
}
connectDB()
//use body parser middleware
app.use(exp.json())
//req to specific APIs
app.use('/user-api',userRoute)
app.use('/product-api',prodRoute)
//error handling
app.use((err,req,res,next)=>{
    res.json({message:"Error",reason:err.message})
})

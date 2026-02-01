import exp from 'express';
import {userApp} from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
import {connect} from 'mongoose'
const port =4000
const app=exp()
//connect to db server
async function connectDB(){
    try{
   await connect("mongodb://localhost:27017/AUdb2")
   console.log("Db connection success")
   app.listen(port,()=>console.log("server listeniong to port 4000..."))
    }
    catch(err){
        console.log("Error to connect the server",err)

}
}
connectDB()

//body parser middleware
app.use(exp.json())

//user api
app.use('/user-api',userApp);
//assign port
app.use('/product-api',productApp);

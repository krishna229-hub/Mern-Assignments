//create http server
//import express module
import exp from 'express';
import { userApp } from './Api/Users-api.js';
import { productApp } from './Api/Product-api.js';


//create server
const app = exp();
//test local memory database
app.listen(3000, () => {
    console.log("server listening on port 3000")
})

//body parsing middleware
app.use(exp.json());
app.use('/Users-api',userApp);
app.use('/Product-api',productApp);
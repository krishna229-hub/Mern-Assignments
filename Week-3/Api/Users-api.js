import exp from 'express';
//create mini express app
export const userApp = exp.Router();
//local memory database
let users=[];

//create user apis
// get request
userApp.get('/users', (req, res) => {
  res.status(200).json({message:"all users",payload: users});
});

// post request
userApp.post('/users', (req, res) => {
  let newUser=req.body;
  users.push(newUser);
});

// put request
userApp.put("/users/:id", (req, res) => {
  //get modified user from req body
  //find the user by id and update the user details
  //if user not found send user not found message
  //if user found update the user details and send success message
  //send res as "user modified"
  let modifiedUser=req.body;
  let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser.id);
    if(userIndex===-1){     
       return res.status(404).json({message:"user not found"});
    }
    let deletedUser=users.splice(userIndex,1,modifiedUser);
    res.status(200).json({message:"user modified",payload:modifiedUser});
});
  userApp.get('/users/:id', (req, res) => {
    let userId=req.params.id; 
    let userObj=users.find(user=>user.id==userId);
    if(!userObj){
      return res.status(404).json({message:"user not found"});
    }
    res.status(200).json({message:"user found",payload:userObj});
});
// delete request
userApp.delete('/users/:id', (req, res) => {
  let userId=req.params.id;
  let userIndex=users.findIndex(user=>user.id==userId); //-1 means not found
  if(userIndex===-1){
    return res.status(404).json({message:"user not found"}); 
  }
  users.splice(userIndex,1); //returns array of resources deleted
  res.status(200).json({message:"user deleted"});
});
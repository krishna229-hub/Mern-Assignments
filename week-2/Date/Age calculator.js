// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years

let dob = "2000-05-15";
let dobDate=new Date(dob)
let today=new Date()
if(dobDate>today){
    console.log("Invalid DOB")
}
//find years difference
let years=today.getFullYear()-dobDate.getFullYear() 
//find months difference
let months=today.getMonth()-dobDate.getMonth()
//find days difference
let days=today.getDate()-dobDate.getDate()  
if(days<0){
    months--;
    days+=new Date(today.getFullYear(),today.getMonth(),0).getDate()
}
if(months<0){
    years--;
    months+=12
}   
console.log(`Age is ${years} years ${months} months and ${days} days`)
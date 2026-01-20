// Initial data:
//     let isLoggedIn = true;
//     let isProfileComplete = false;

// Tasks:
//    1. If user is not logged in → show "Please login"
//    2. If logged in but profile incomplete → show "Complete your profile"
//    3. If logged in and profile complete → show "Welcome back!"
//    4. Store the result in message
//    5. Print the message

let isLoggedIn = true
let isProfileComplete = false

let message

// If user is not logged in → show "Please login"
if (isLoggedIn == false)
{
    message = "Please Login"
}
// If logged in but profile incomplete → show "Complete your profile"
else if (isLoggedIn == true && isProfileComplete == false)
{
    message = "Complete Your Profile"
}
// If logged in and profile complete → show "Welcome back!"
else
{ 
    message = "Welcome back!" //Store the result in message
}

//Print the message
console.log(message)
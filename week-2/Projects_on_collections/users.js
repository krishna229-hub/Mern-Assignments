// Project story:
// -------------
// “We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).
// Frontend and backend will later consume THIS logic.”

// Data setup:
// -----------
// const users = [
//   { id: 1, name: "Ravi", role: "student", active: true },
//   { id: 2, name: "Anil", role: "admin", active: true },
//   { id: 3, name: "Suman", role: "student", active: false }
// ];

// const courses = [
//   { id: 101, title: "JavaScript", price: 999, published: true },
//   { id: 102, title: "React", price: 1499, published: false },
//   { id: 103, title: "Node", price: 1299, published: true }
// ];

// const cart = [
//   { courseId: 101, qty: 1 },
//   { courseId: 103, qty: 2 }
// ];

// const roles = {
//   admin: ["create", "update", "delete", "view"],
//   student: ["view"]
// };


// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably

// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
// MODULE-1 :USER PROCESSING ENGINE 
export function getActiveUsers(){
  // we know that when we are trying to get the data or select the data we use filter function
  let activeUsers = users.filter((user) => user.active===true);
  return activeUsers;
}
export function getActiveUserNames(){ // we have to extract the names of active users
   let activeUsers = getActiveUsers();
     let activeUserNames = [];
  for(let user of activeUsers){
    // console.log(user.name)
    activeUserNames.push(user.name);
  }
  return activeUserNames;
}
export function isAdminExist(){  // we have to check if any admin exists
  let exist = false;
  for(let user of users){
    if(user.role === 'admin'){
      exist = true;
      return exist;
    }
  }
  return exist;
}
export function findUserById(userId){  // we have to find user by id
  for(let user of users){
    if(user.id === userId){
      return user;
    }
  }
}

export function deactivateUser(id){
  // we need id as we should know which user we have to deactivate
  // now this is working let's try to make this function in one line if that's possible
  // let usersAfter = users.map((user) => user.id===id ? user.active=false:user) // this is returning only the active status so we have to write it inside the block
  let clonedUser = structuredClone(users)
  let usersAfter = clonedUser.map((user) => {
    if(user.id === id){
      user.active = false;
    }
    return user
  })
  
  return usersAfter;
}


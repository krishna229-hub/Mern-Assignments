// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
// Array of course names to work with
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() select courses whose name length is greater than 5 characters
result1 = courses.filter(courObj => courObj.length > 5);
console.log(result1); 
// Output: ["javascript", "mongodb", "express"]

// 2. map() convert each course name to uppercase
result2 = courses.map(courObj => courObj.toUpperCase());
console.log(result2); 
// Output: ["JAVASCRIPT", "REACT", "NODE", "MONGODB", "EXPRESS"]

// 3. reduce() currently just returns the accumulator as-is
result3 = courses.reduce(courObj => courObj);
console.log(result3); 
// Output: "express" (last element, due to how reduce is used here)

// find the course name "react"
result4 = courses.find(courObj => courObj === 'react');
console.log(result4); 
// Output: "react"

//find the index named "node"
result5 = courses.findIndex(courObj => courObj === 'node');
console.log(result5); 
// Output: 2

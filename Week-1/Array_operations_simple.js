// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
    const temperatures = [32, 35, 28, 40, 38, 30, 42];
     //filter() temperatures above 35
    let result1=temperatures.filter(tempObj=>tempObj>35);
    console.log(result1);
    //map to convert all temperatures from Celsius → Fahrenheit
    let results2=temperatures.map(tempObj=>{
      return  conversion=(tempObj * 1.8) + 32;
    });
    console.log(results2);
    //reduce() to calculate average temperature
    let sumOfTemps = temperatures.reduce((sum, temp) => sum + temp, 0);
    let averageTemp = sumOfTemps / temperatures.length;
    console.log(averageTemp);
    //find() first temperature above 40
    let result4=temperatures.find(tempObj=> tempObj>40)
    console.log(result4)
    //find Index of 28
    let result5=temperatures.findIndex(tempObj=>tempObj===28)
    console.log(result5)

// Assignment 2: Course List Manager
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

// Assignment 3: Student Marks Processor
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
// Array of marks received from the exam system
const marks = [78, 92, 35, 88, 40, 67];

// 1. filter(): select marks that are greater than or equal to 40 (pass marks)
const passMarks = marks.filter(mark => mark >= 40);
console.log(passMarks);

// 2. map(): add 5 grace marks to each student's mark
const graceMarks = marks.map(mark => mark + 5);
console.log(graceMarks);

// 3. reduce()find the highest mark in the array
const highestMark = marks.reduce((max, mark) => {
    return mark > max ? mark : max;
});
console.log(highestMark);

//find()first mark that is below 40 (failed student)
const firstFail = marks.find(mark => mark < 40);
console.log(firstFail);


// findIndex of the mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log(indexOf92);


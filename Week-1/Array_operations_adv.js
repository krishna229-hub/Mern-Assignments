// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// get only products that are in stock
const inStockProducts = cart.filter(item => item.inStock);

// create new array with name and totalPrice
const productTotals = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

// calculate grand total cart value
const grandTotal = productTotals.reduce((sum, item) => {
  return sum + item.totalPrice;
}, 0);

// find details of "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");

// find index of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

// output
console.log("In-stock products:", inStockProducts);
console.log("Product totals:", productTotals);
console.log("Grand total:", grandTotal);
console.log("Mouse details:", mouseDetails);
console.log("Keyboard index:", keyboardIndex);

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// students who passed
const passedStudents = students.filter(s => s.marks >= 40);

// add grade
const studentsWithGrade = students.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 60) grade = "C";
  else grade = "D";

  return { ...s, grade };
});

// average marks
const averageMarks =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;

// student who scored 92
const student92 = students.find(s => s.marks === 92);

// index of Kiran
const indexOfKiran = students.findIndex(s => s.name === "Kiran");

console.log(passedStudents);
console.log(studentsWithGrade);
console.log(averageMarks);
console.log(student92);
console.log(indexOfKiran);


// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// employees from IT department
const itEmployees = employees.filter(e => e.department === "IT");

// add netSalary with 10% bonus
const employeesWithNetSalary = employees.map(e => {
  return {
    ...e,
    netSalary: e.salary + e.salary * 0.10
  };
});

// total salary payout
const totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);

// employee with salary 30000
const employee30000 = employees.find(e => e.salary === 30000);

// index of employee Neha
const indexOfNeha = employees.findIndex(e => e.name === "Neha");

console.log(itEmployees);
console.log(employeesWithNetSalary);
console.log(totalSalary);
console.log(employee30000);
console.log(indexOfNeha);

// Movie Database Analyzer
// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"
let movies = [  
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
// 1. filter() only "Sci-Fi" movies
let sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("sci-fi movies:", sciFiMovies);
// 2. map() to return: "Inception (8.8)"
let movieTitles = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("movie titles with ratings:", movieTitles);
// 3. reduce() to find average movie rating
let totalRating = movies.reduce((total, movie) => total + movie.rating, 0);
let averageRating = totalRating / movies.length;
console.log("average movie rating:", averageRating);
// 4. find() movie "Joker"

let jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("movie 'joker':", jokerMovie);
// 5. findIndex() of "Avengers"

let indexOfAvengers = movies.findIndex(movie => movie.title === "Avengers");
console.log("index of 'avengers':", indexOfAvengers);

// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000
let transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];
// filter() all credit transactions
let creditTransactions = transactions.filter(Obj => Obj.type === "credit");
console.log("all credit transactions:", creditTransactions);

//  map() to extract only transaction amounts
let transactionAmounts = transactions.map(Obj => Obj.amount);
console.log("transaction amounts:", transactionAmounts);

// reduce() to calculate final account balance
let finalBalance = transactions.reduce((balance, Obj) => {
    return Obj.type === "credit" ? balance + Obj.amount : balance - Obj.amount;
}, 0);
console.log("final account balance:", finalBalance);

//find() the first debit transaction
let firstDebitTransaction = transactions.find(Obj => Obj.type === "debit");
console.log("first debit transaction:", firstDebitTransaction);
// findIndex() of transaction with amount 10000
let index = transactions.findIndex(Obj => Obj.amount === 10000);
console.log("index of transaction with amount 10000:", index);
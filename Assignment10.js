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

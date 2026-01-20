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


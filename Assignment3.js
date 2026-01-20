// Initial data:
//      let price = 1299;

// Tasks:
//    1. If price < 500 → "Budget Course"
//    2. If price between 500–1000 → "Standard Course"
//    3. If price > 1000 → "Premium Course"
//    4. Store label in courseTag
//    5. Print the label
let price = 1299;
let courseTag;

// check for budget course
if (price < 500) {
    courseTag = "Budget Course";
}
// check for standard course
else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
}
// otherwise it's a premium course
else {
    courseTag = "Premium Course";
}

// print the course label
console.log(courseTag);

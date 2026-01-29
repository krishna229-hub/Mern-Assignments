const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
// we need to get all the published courses
export function getPublishedCourses(){
    // as the task is of selection we are using filter
    let publishedCourses = courses.filter((course) => course.published===true);
    return publishedCourses;
}
export function sortByPrice(){
    // if the course1's price is higher we are asking it to consider course1
    let sortedCourses = courses.sort((course1,course2) => course1.price > course2.price ? -1:1);
    return sortedCourses
}
// we need to extract only {title and price}
export function extractTitleAndPrice(){
    let data = courses.map((course) => {
        let title = course.title;
        let price = course.price;
        return {title,price};
    })
    return data;
}
export function getTotalValue(){
    let total = getPublishedCourses().reduce((accumulator,course) => accumulator + course.price,0);
    return total;
}
export function addCourse(id,title,price,published){
    let courseToBeAdded = {
        id:id,
        title:title,
        price:price,
        published:published
    }
    let data = [...courses]
    data.push(courseToBeAdded);
    return data
}


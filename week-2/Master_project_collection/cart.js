// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses
import {getPublishedCourses} from './courseEngine.js'
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
export function mergeCartCourse(){ // getting full course info
    let courses = structuredClone(getPublishedCourses());
    let finalCourse = courses.map((course) => {
        let cartItem = cart.find((item) => item.courseId === course.id);
        course.qty = cartItem.qty; // right now i am directly assigning it but there might be some error here when there is no course which is mentioned so need to tackle this 
        return course;
    })
    return finalCourse;
}
export function getCartTotal(){     // calculating total cart amount
    let cartItem = mergeCartCourse();
    let total = cartItem.reduce((accumulator,item) => accumulator + (item.price*item.qty),0);
    return total;
}
export function increaseQuantity(cartId,qty){  // increase quantity of a course immutably   
    let cartItem = structuredClone(mergeCartCourse());
    let increasedCart = cartItem.map((item) => {
        if(cartId === item.id){
            item.qty = qty;
        }
        return item;
    })
    return increasedCart;
}
export function removeItem(cartId){  // remove a course from cart   
    let final = mergeCartCourse();
    let itemIndx = final.findIndex((item) => item.id === cartId);
    if(itemIndx !== -1){
        final.splice(itemIndx,1);
    }
    return final;
}
export function checkIfAllPaid(){     // check if all cart items are paid courses
    let final = mergeCartCourse();
    let allPaid = true;
    for(let val of final){
        if(val.price === 0){
            allPaid = false;
            break;
        }
    }
    return allPaid;
}

console.log(checkIfAllPaid()); 
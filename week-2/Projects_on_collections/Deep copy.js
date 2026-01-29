// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
const deepCopyOrder={...order} 
deepCopyOrder.customer={...order.customer}//customer.address.city
deepCopyOrder.customer.address={...order.customer.address}
deepCopyOrder.items=[...order.items] //items[0].price
deepCopyOrder.items[0]={...order.items[0]}
deepCopyOrder.customer.address.city="Chennai"
deepCopyOrder.items[0].price=65000
console.log("Original Order:",order)
console.log("Deep Copied Order:",deepCopyOrder)
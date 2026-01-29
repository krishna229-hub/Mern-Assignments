// Product database (simulated)
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];

export function getProductById(id) {
  let searchedPrd = products.find(product => product.id === id);
  return searchedPrd || null;
}

export function getAllProducts() {
  return products;
}

// get products by category
export function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

// search products by name (case-insensitive, partial match)
export function searchProducts(query) {
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
}

// check stock availability
export function checkStock(productId, quantity) {
  let prd = products.find(product => product.id === productId);
  if (!prd) return false;
  return prd.stock >= quantity;
}

// reduce stock after purchase
export function reduceStock(productId, quantity) {
  let prd = products.find(product => product.id === productId);
  if (prd && prd.stock >= quantity) {
    prd.stock -= quantity;
    return true;
  }
  return false;
}

# E-Commerce Application Backend

A REST API backend for an E-commerce application built using Node.js, Express, and Mongoose (MongoDB). It features JWT authentication, HTTP-Only cookies, and nested cart relationships using populated references.

---

## Project Structure

- **APIs/**: User and Product routes (`UserAPI.js`, `ProductAPI.js`).
- **Models/**: Schemas for User and Product (`UserModel.js`, `ProductModel.js`).
- **middleware/**: JWT cookie verification middleware (`verifyToken.js`).
- **Server.js**: Connection setup and server startup.
- **req.http**: HTTP tests for all endpoints.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://localhost:27017/`.

### Installation & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node Server.js
   ```

---

##  API Endpoints

### User & Cart Routes (`/user-api`)
- `GET /users` - Get all users
- `POST /users` - Register a new user (with bcrypt hashing)
- `POST /auth` - Login (authenticates & issues HTTP-Only cookie)
- `GET /test` - Test route (verifies JWT token from cookie)
- `PUT /user-cart/user-id/:uid/product-id/:pid` - Add a product to the user's cart
- `GET /user/:uid` - Get user details (populates cart product information)

### Product Routes (`/product-api`)
- `GET /products` - Get all products
- `POST /products` - Register a new product

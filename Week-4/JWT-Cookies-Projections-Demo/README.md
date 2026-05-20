# JWT, Cookies & MongoDB Projections Demo

A simple Node.js, Express, and Mongoose REST API demonstrating user authentication via JWT, secure storage using HTTP-Only cookies, password hashing with bcrypt, and query projections.

---

## Project Structure

- **Models/**: Schemas for User and Product.
- **middleware/**: JWT cookie verification middleware (`verifyToken.js`).
- **server.js**: Server entry point and database connection setup.
- **userApi.js** / **productApi.js**: Routers containing the endpoints.
- **REST-test.http**: File containing sample requests for API testing.

---

##  Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed locally.
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://127.0.0.1:27017/`.

### Installation & Run
1. Install the dependencies:
   ```bash
   npm install
   ```
2. Run the application:
   ```bash
   node server.js
   ```

---

## API Endpoints

### User API (`/user-api`)
- `GET /users` - Retrieve all users
- `POST /users` - Create a new user (hashes password)
- `POST /auth` - Login (signs JWT & sets secure HTTP-Only cookie)
- `GET /test` - Protected route (verifies JWT cookie)

### Product API (`/product-api`)
- `GET /products` - Retrieve all products
- `POST /products` - Create a new product
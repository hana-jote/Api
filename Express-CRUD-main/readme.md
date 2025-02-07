# **Express CRUD operetion and JWT Auth**

Welcome to **Test Con**, a simple Express.js application for your first experience with building a backend server. This project includes basic setup for handling CRUD operations, user authentication, and database integration using MongoDB.

---

## **Table of Contents**
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
7. [Technologies Used](#technologies-used)
8. [License](#license)

---

## **Features**
- **User Authentication**: Secure user registration and login using JSON Web Tokens (JWT).
- **CRUD Operations**: Basic Create, Read, Update, and Delete operations for managing data.
- **Database Integration**: MongoDB for storing and retrieving data.
- **Environment Variables**: Secure configuration using `.env` files.
- **Validation**: Input validation using `Joi`.

---

## **Prerequisites**
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## **Configuration**
1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:
   ```env
   MONGO_URI=mongodb://localhost:27017/test_db
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```
   - Replace `your_jwt_secret_key` with a strong, random string.
   - If using MongoDB Atlas, replace `MONGO_URI` with your cloud database connection string.

---

## **Running the Application**
1. Start the application in development mode (with `nodemon`):
   ```bash
   npm run dev
   ```

2. Start the application in production mode:
   ```bash
   npm start
   ```

3. The server will start running at `http://localhost:3000`.

---

## **API Endpoints**
Here are the available API endpoints:

### **User Authentication**
- **POST `/api/register`**: Register a new user.
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **POST `/api/login`**: Log in an existing user.
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### **CRUD Operations**
- **GET `/api/items`**: Get all items.
- **POST `/api/items`**: Create a new item.
- **GET `/api/items/:id`**: Get a specific item by ID.
- **PUT `/api/items/:id`**: Update an item by ID.
- **DELETE `/api/items/:id`**: Delete an item by ID.

---

## **Technologies Used**
- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/)
- **Input Validation**: [Joi](https://joi.dev/)
- **Environment Management**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Password Hashing**: [bcrypt](https://www.npmjs.com/package/bcrypt)
- **Utility Library**: [lodash](https://lodash.com/)

---

## **License**
This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## **Support**
If you encounter any issues or have questions, feel free to open an issue on the repository.

---

Enjoy building with **Test Con**! 🚀

---

### **Example `.env` File**
```env
MONGO_URI=mongodb://localhost:27017/test_db
PORT=3000
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

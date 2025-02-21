const express = require("express"); // Imports the Express framework.
const mongoose = require("mongoose"); //Imports Mongoose, an ODM (Object Data Modeling) library for MongoDB.
const dotenv = require("dotenv"); //Imports dotenv to manage environment variables.
const userRoute = require("./routes/userRoute"); // No need for .js extension with CommonJS
const { authenticateUser } = require("./controller/authenticateUser");
dotenv.config(); // Load environment variables from .env file

const app = express();

const port = process.env.PORT || 3004;
const mongoURI = process.env.MONGO_URI; // Use the MONGO_URI environment variable

// Built-in middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use routes
app.use("/api/user", userRoute);
app.use("/api/auth", authenticateUser);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("database connected..");
    app.listen(port, () => {
      console.log(`Server is running on port -> ${port}`);
    });
  })
  .catch((error) => console.log(error));

const express = require("express");
const app = express();
const dotenv = require("dotenv").config("./.env");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

const port = process.env.PORT || 2000;

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, () => {
      console.log(`sever running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

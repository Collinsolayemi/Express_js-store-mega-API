require("express-async-errors");
require("dotenv").config("./.env");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const productRoute = require("./routes/products-route");

//middleware
app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use("/api/v1/products", productRoute);

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

//4 hrs 16 min

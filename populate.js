require("dotenv").config();
const connectDb = require("./db/connect");

const Product = require("./models/product-schema");
const jsonProducts = require("./products.json");

// a function to import the data to database
const start = async () => {
  try {
    await connectDb(process.env.DATABASE_URL);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};

start();

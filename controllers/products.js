const Product = require("../models/product-schema");
const express = require("express");

const getAllProductStatic = async (req, res) => {
  const search = "a";
  const products = await Product.find({}).sort("name price rating");

  res.status(200).json({ msg: products });
};

const getAllProduct = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObject);
  if (sort) {
    products = products.find();
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProduct,
  getAllProductStatic,
};

const Product = require("../models/product-schema");
const express = require("express");

const getAllProductStatic = async (req, res) => {
  const search = "a";
  const products = await Product.find({}).sort("name");

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
    queryObject.name = name;
  }

  const products = await Product.find(req.query);
  res.status(200).json({ msg: products });
};

module.exports = {
  getAllProduct,
  getAllProductStatic,
};

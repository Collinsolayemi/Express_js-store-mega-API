const Product = require("../models/product-schema");
const express = require("express");

const getAllProductStatic = async (req, res) => {
  throw new Error("testing async error");
  res.status(200).json({ msg: "product testing routes" });
};

const getAllProduct = async (req, res) => {
  const prod = await Product.find();
  res.status(200).json({ msg: prod });
};

module.exports = {
  getAllProduct,
  getAllProductStatic,
};

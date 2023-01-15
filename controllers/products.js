const express = require("express");

const getAllProductStatic = async (req, res) => {
  throw new Error("testing async error");
  res.status(200).json({ msg: "product testing routes" });
};

const getAllProduct = async (req, res) => {
  res.status(200).json({ msg: "product routes" });
};

module.exports = {
  getAllProduct,
  getAllProductStatic,
};

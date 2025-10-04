const products = require("../data/products");

const getProducts = (req, res) => {
  try {
    if (!products || products.length === 0) {
      return res.status(404).json({ success: false, message: "No products found" });
    }

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = { getProducts };

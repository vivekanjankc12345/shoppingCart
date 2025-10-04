const checkout = (req, res) => {
  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty or invalid" });
    }

    // Log order (dummy simulation)
    console.log("Order received:", items);

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: items,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Checkout failed", error: error.message });
  }
};

module.exports = { checkout };

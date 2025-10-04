const express = require("express");
const cors = require("cors");
const productsRoute = require("./routers/productRoutes");
const checkoutRoute = require("./routers/checkoutRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productsRoute);
app.use("/api/checkout", checkoutRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

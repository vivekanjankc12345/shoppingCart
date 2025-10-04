const request = require("supertest");
const express = require("express");
const productRoutes = require("../routers/productRoutes");

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);

describe("GET /api/products", () => {
  it("should return products successfully", async () => {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data[0]).toHaveProperty("id");
    expect(res.body.data[0]).toHaveProperty("name");
    expect(res.body.data[0]).toHaveProperty("price");
  });
});

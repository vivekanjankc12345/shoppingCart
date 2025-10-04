# 🛒 Shopping Cart (MERN Stack)

A minimal **e-commerce shopping cart** application built using the **MERN ( Express, React, Node.js)** stack.  
Users can view products, add them to a cart, change quantities, and simulate a checkout.  
Cart data persists using **localStorage** to avoid losing items on page refresh.

---

## 📁 Folder Structure

shoppingCart/
│
├── backend/
│ ├── controllers/
│ │ └── productController.js
│ ├── routes/
│ │ └── productRoutes.js
│ ├── tests/
│ │ └── product.test.js
│ ├── index.js
│ └── package.json
│
└── frontend/
├── src/
│ ├── api/
│ │ └── api.js
│ ├── components/
│ │ └── ProductCard.jsx
│ ├── context/
│ │ └── CartContext.jsx
│ ├── pages/
│ │ └── Home.jsx
│ ├── App.jsx
│ └── index.js
└── package.json



## ⚙️ Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Context API for cart state management
- Axios for API integration

**Backend:**
- Node.js + Express
- Jest for testing
- CORS and Nodemon for development

---

## 🚀 Getting Started

### 🧩 Clone Repository
```bash
git clone https://github.com/your-username/shoppingCart.git
cd shoppingCart
⚙️ Setup Backend
bash
Copy code
cd backend
npm install
npm start
Server runs on: http://localhost:5000

💻 Setup Frontend
bash
Copy code
cd ../frontend
npm install
npm run dev
App runs on: http://localhost:3000

🧠 Features
✅ Fetch and display products from backend
✅ Add products to cart
✅ Update item quantities
✅ View cart and total price
✅ Checkout simulation (sends cart data to backend)
✅ Cart data saved in localStorage
✅ Jest test for /products endpoint

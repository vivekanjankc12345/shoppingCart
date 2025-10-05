# 🛒 Shopping Cart (MERN Stack)

A simple **Shopping Cart** application built using the **MERN ( Express, React, Node.js)** stack.  
Users can browse products, add them to a cart, modify quantities, and simulate a checkout.  
The cart state is managed using React Context and persisted in **localStorage**.

---

## 📖 Project Description

This project demonstrates:
- RESTful API creation using **Express.js**
- Component-based frontend with **React**
- Cart management using **Context API**
- Persistent state with **localStorage**
- Basic **unit testing** with **Jest**

---

## ⚙️ Tech Stack

**Frontend:** React (Vite), Tailwind CSS, Context API, Axios  
**Backend:** Node.js, Express.js, Jest, CORS, Nodemon  

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



## 🚀 Getting Started

### 🧩 Clone the Repository
```bash
git clone https://github.com/vivekanjankc12345/shoppingCart.git
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
cd ../frontend/myapp
npm install
npm run dev
App runs on: http://localhost:3000

🧪 Running Test Cases
To run Jest test cases for backend:

bash
Copy code
cd backend
npm test

🧠 Assumptions & Design Choices
Cart data is stored in localStorage to persist after refresh.

No real payment gateway is integrated — checkout is simulated.

Backend products are served from a mock dataset for simplicity.

API endpoints are kept minimal for demonstration purposes.

Jest used only for backend API testing.

Loom video link here 👇
📹 Demo Video: https://www.loom.com/share/4d2ccafc93404c8b863dffd26a6e4f45?sid=4546c4c6-47bd-43d5-93c1-1395b439c037


👨‍💻 Author
Vivek Anjan
💼 MERN Stack Developer
📧 vivekanjankc12345@gmail.com

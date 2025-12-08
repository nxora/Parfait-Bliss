# 🍨 **Parfait Bliss — Online Dessert Store**

A beautifully designed full-stack MERN e-commerce application where users can browse desserts, add to cart, and checkout via WhatsApp.

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React-%2361DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Node](https://img.shields.io/badge/Backend-Node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-%2347A248?style=for-the-badge\&logo=mongodb\&logoColor=white)

---

## 🍓 **Overview**

**Parfait Bliss** is a modern dessert e-commerce app with:

* Beautiful UI using **React + TailwindCSS**
* Secure authentication using **JWT**
* Email verification
* Add-to-Cart, Quantity Update, LocalStorage persistence
* Protected Checkout Page
* WhatsApp-based ordering (perfect for small businesses)
* Fully responsive mobile-first design

---

## 🚀 **Tech Stack**

### **Frontend**

* React (Vite)
* TailwindCSS
* Axios
* React Router

### **Backend**

* Node.js + Express
* MongoDB + Mongoose
* BcryptJS (password hashing)
* JWT Authentication
* Nodemailer (email verification)

---

## 📦 **Features**

### 🧁 **User Features**

* Browse desserts
* View detailed product info
* Add items to cart
* Increase/decrease quantity
* Save cart to LocalStorage
* Checkout via WhatsApp
* Email verification workflow
* Secure login + signup

### 🔐 **Security**

* Hashed passwords
* Signed JWT tokens
* Protected `/api/auth/me` route
* Email verification before login
* Safe backend validation

---

## 🛠️ **Installation & Setup**

### **1. Clone the repository**

```bash
git clone https://github.com/dave-ai/parfait-bliss.git
cd parfait-bliss
```

---

### **2. Backend Setup**

```bash
cd backend
npm install
npm start
```

Create `.env`:

```
MONGO_URI=your_mongo_db_url
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_email
EMAIL_PASS=your_mail_password
```
## Phone                             | Desktop
|-------------------------------|-----------------|
![](public/assets/pc%20(2).png) |![](public/assets/pc%20(1).png)


---

### **3. Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

Create `.env`:

```
VITE_API_URL=http://localhost:5000
```

---

## 🌍 **Deployment**

### **Backend → Render**

* Push backend to GitHub
* Create a Web Service
* Set build: `npm install`
* Set start: `npm start`
* Add environment variables
* Get live URL

---

### **Frontend → Vercel**

* Push frontend to GitHub
* Create new Vercel Project
* Add env:

  ```
  VITE_API_URL=https://your-render-url.com
  ```
* Deploy

---

## 📱 **Screenshots**

> Add your screenshots later

```
/screenshots
  ├── home.png
  ├── cart.png
  ├── checkout.png
```

---

## 🤝 **Contributing**

Contributions are welcome!
Feel free to fork the repo and open a pull request.

---

## ⭐ **Show Your Support**

If this project helped you, give it a **star** ⭐ on GitHub!

---

## 📄 **License**

MIT License © 2025 Parfait Bliss

---

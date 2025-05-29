# 🕋 HajjLottery Backend

The **HajjLottery Backend** is a secure and scalable RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. It enables user registration, Hajj lottery submissions, and admin-level management of users and registrants.

---

## 🚀 Features

- **User Authentication**
  - Register and login with secure password hashing (bcrypt)
  - JWT-based authentication
  - Role-based authorization (admin/user)

- **Hajj Lottery Registration**
  - Submit and store Hajj registration entries
  - Prevent duplicate entries per user
  - Admins can view and delete any entry

- **Admin Dashboard**
  - View all registered users (without password)
  - View all Hajj registrants
  - Delete users and registration entries

- **Robust Error Handling**
  - Centralized error middleware
  - Mongoose validation errors handled gracefully

---

## 🛠️ Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcrypt** for password hashing
- **dotenv**, **CORS** for config & security




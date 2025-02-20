# PrimeScope News Server 🚀

Welcome to the server-side of **PrimeScope News**, an innovative newspaper platform that combines technology and journalism to deliver a seamless news consumption experience. This server handles data management, user authentication, premium features, and administrative functionalities.

---

## 📝 **Project Overview**
PrimeScope News is an innovative news aggregation platform designed for dynamic content delivery, premium subscription options, and intuitive user experiences. The server ensures robust backend support for CRUD operations, user management, article management and premium subscription services. 

This platform is tailored to meet the needs of both news readers and content creators, making it a comprehensive solution for digital journalism.

---

## 💡 **Purpose**
The primary goal of PrimeScope News is to revolutionize news consumption through:
- Delivering trending news content in real-time.
- Enabling user-generated articles with an efficient approval system.
- Offering premium subscription-based content access.
- Providing powerful tools for admins to oversee platform activities.
- Provides premium features for subscribed users.
- Supports an admin dashboard for content and user management.
- Offer readers a centralized platform to access trending news and premium articles.
- Provide admins with powerful tools to manage content and users efficiently.
- Empower content creators to publish and share articles seamlessly.

---

## 🛡️ **Admin Information**
- **Username:** ironman@gmail.com  
- **Password:** 123456Aa@ 

---

## 🌐 **Live Site**
Check out the live demo here: [PrimeScope News Live Site](https://b10-assignment-12.web.app/)

---

## ✨ **Features**
- RESTful API design for smooth client-server interaction.
- Secure data storage and retrieval using MongoDB.
- Protected routes for authorized access to sensitive operations.
- Multi-criteria article filtering and search functionality.
- Premium subscription plans with customizable durations.
- Admin tools for managing publishers, articles, and users.
- Real-time notifications for successful operations.
- Dynamic role management for admins and users.
- Middleware for validating and sanitizing data inputs.
- Protected routes with JWT and local storage.
- View count-based trending news.
- Pagination for admin content management.
- Advanced search and filter options for articles.
- Fully functional admin dashboard with data visualization.
- Notifications for CRUD operations and authentication.

---

## 🔑 **Key Functionalities**
1. Email/Password authentication with JWT for protected routes.
2. Role-based access for Admin and Users.
3. CRUD operations for articles and publishers.
4. Dynamic statistics and charts for data visualization.
5. Premium subscription system.
6. Trending news feature based on view count.
7. Role-based access control for users and admins.
8. Real-time view count updates for articles to highlight trending news.

---

## 🛠️ **Technologies Used**
- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth & JWT
- **Environment Management**: dotenv
- **Cross-Origin Resource Sharing**: cors
- **Visualization:** React Google Charts  
- **File Uploads:** imgbb or Cloudinary  
- **Hosting:** Vercel

---

## 📦 **NPM Packages Used**
- `express` - Web application framework  
- `mongoose` - MongoDB ORM  
- `jsonwebtoken` - Token-based authentication  
- `dotenv` - Environment variable management  
- `bcryptjs` - Password hashing  
- `cors` - Cross-Origin Resource Sharing  
- `multer` - File upload handling  
- `imgbb-uploader` - Image hosting integration  
- `react-google-charts` - Data visualization  

---

## 🗂️ **API Overview**
PrimeScope News provides a robust RESTful API to manage users, articles, and subscriptions.

---

## 📍 **API Endpoints**

### **User**
- `POST /api/register` - Register a new user.
- `POST /api/login` - User login with JWT token generation.
- `GET /api/users` - Get all users (Admin only).
- `PATCH /api/users/:id` - Update user role or information.

### **Articles**
- `POST /api/articles` - Add a new article.
- `GET /api/articles` - Fetch all approved articles.
- `GET /api/articles/:id` - Fetch single article details.
- `PATCH /api/articles/:id` - Approve, decline, or update articles (Admin only).

### **Publishers**
- `POST /api/publishers` - Add a new publisher (Admin only).
- `GET /api/publishers` - Get all publishers.

### **Authentication**
- `POST /api/register` - Register a new user.  
- `POST /api/login` - Authenticate user and issue JWT.
  
---

## 📜 **Additional Points**
- **Scalability**: Designed to handle large amounts of data efficiently.
- **Real-time Notifications**: Using Firebase for live updates.
- **Security Features**: Data sanitization and HTTPS support.

---

## 🧮 **Dynamic Features**
- **Trending Articles:** Articles with the highest view count are highlighted dynamically.  
- **Statistics:** Real-time user and article statistics using charts.  
- **Subscription Plans:** Premium content access for subscribed users.  

---


## 🔧 Installation and Usage

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-SK-Jabed.git




# **LostFinder - Server-Side** 🚀🛠️

![LostFinder Banner](https://github.com/SK-Jabed/LostFinder-Project-Client/blob/6cf0178c021d12582d31fc8afb17cbd6113f58c2/src/assets/Readme-pic.png)

## 📄 **Project Overview**  
LostFinder's backend is a **robust, scalable, and efficient** server-side implementation designed to handle **authentication, item management, and real-time notifications** for lost and found items.  

It is built with **Node.js** and **Express.js**, ensuring high performance and seamless communication with the frontend. The backend follows an **API-first design**, making it easy to integrate and expand in the future.  

---

## 🎯 **Purpose**  
The backend of **LostFinder** acts as the **backbone of the platform**, ensuring:  
✅ **Secure and reliable authentication** using JWT.  
✅ **Efficient data management** with MongoDB.  
✅ **RESTful API design** for smooth client-server interaction.  
✅ **Scalable architecture** to handle increasing user activity.  
✅ **Real-time notifications** to alert users of item matches.  

The backend supports **secure database transactions, user management, and optimized API interactions** to maintain a fast and responsive platform.  

---

## 🌐 **Live Site & API Documentation**  

🔗 **Frontend Live Site**: [LostFinder Live](https://b10-assignment-11-753d2.web.app/)  

---

## 🔑 **Key Functionalities**  

### 📦 **Item Management**  
✔ Create, update, delete, and retrieve lost/found items.  
✔ Filter and search items based on category, date, and location.  
✔ Mark items as "Found" when claimed.  

### 👤 **User Management**  
✔ Secure **JWT-based authentication** for login & registration.  
✔ Firebase authentication integration for secure user sessions.  
✔ Maintain a user profile database with secure access.  

### 🗄️ **Database Management**  
✔ **MongoDB integration** for efficient and scalable data storage.  
✔ Optimized database queries for faster retrieval.  
✔ Use of **indexes** to enhance search performance.  

### 🌐 **API-First Architecture**  
✔ RESTful API endpoints for smooth communication with the frontend.  
✔ Supports **CRUD operations** for lost and found items.  
✔ Middleware-based request validation and authentication.  

### 🔐 **Security & Data Protection**  
✔ **JWT-based authentication** for secure user access.  
✔ **Input validation & data sanitization** using `express-validator`.  
✔ **CORS policy handling** for secure cross-origin requests.  

---

## 🛠 **Technologies Used**  

| **Category**         | **Technologies**  |
|----------------------|------------------|
| **Backend Framework** | Node.js, Express.js |
| **Database**         | MongoDB |
| **Authentication**   | Firebase Admin SDK, JWT |
| **Deployment**       | Vercel |
| **Environment Management** | dotenv |
| **Cross-Origin Handling** | CORS |
| **Security**         | bcrypt, jsonwebtoken, express-validator |

---

## 📦 **Dependencies**  

### 🔹 **Main Dependencies**
- `express` – Fast and minimalist web framework.  
- `dotenv` – Environment variable management.  
- `cors` – Handling Cross-Origin Requests.  
- `jsonwebtoken` – Secure user authentication with JWT.  
- `mongoose` – MongoDB object modeling for easy database interaction.  
- `express-validator` – Input validation and data sanitization.  

### 🔹 **Dev Dependencies**
- `nodemon` – Auto-restart server during development.  
- `eslint` – Linting for clean and maintainable code.  

---

## 📡 **API Endpoints Reference**  

| Method | Endpoint             | Description                           | Authentication |
|--------|----------------------|---------------------------------------|---------------|
| **Auth Routes** ||||
| POST   | `/auth/register`     | Register a new user                   | ❌ No |
| POST   | `/auth/login`        | Authenticate user & generate token    | ❌ No |
| GET    | `/auth/profile`      | Retrieve user profile data            | ✅ Yes (JWT) |
| **Item Routes** ||||
| GET    | `/items`             | Fetch all lost/found items            | ❌ No |
| POST   | `/items`             | Create a new lost/found item          | ✅ Yes (JWT) |
| GET    | `/items/:id`         | Get details of a specific item        | ❌ No |
| PUT    | `/items/:id`         | Update an existing lost/found item    | ✅ Yes (JWT) |
| DELETE | `/items/:id`         | Remove an item from the database      | ✅ Yes (JWT) |
| **User Routes** ||||
| GET    | `/users`             | Get list of all users                 | ✅ Yes (Admin) |

---

## 🔧 **Installation & Setup**  

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
✔ **Node.js** (LTS version) - [Download Here](https://nodejs.org/)  
✔ **MongoDB** (Local or Atlas) - [Setup Guide](https://www.mongodb.com/docs/manual/installation/)  
✔ **Git** - [Download Here](https://git-scm.com/)  

---

### **2️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/lostfinder-server.git
cd lostfinder-server
```

---

### **3️⃣ Install Dependencies**  
```bash
npm install
```

---

### **4️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory and add the following:  

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_ADMIN_KEY=your_firebase_admin_key
```

---

### **5️⃣ Start the Server**  
```bash
npm start
```
The API should now be running on `http://localhost:5000/`.  

For development mode with **auto-reloading**, use:  
```bash
npm run dev
```

---

## 🚀 **Deployment**  

### **1️⃣ Deploy on Vercel**  
```bash
vercel deploy
```
Ensure that `.env` variables are configured in **Vercel Settings**.  

### **2️⃣ Deploy on Render** *(Alternative)*  
- Push the repository to **GitHub**.  
- Connect **Render** to the GitHub repository.  
- Configure environment variables in the **Render Dashboard**.  
- Click **Deploy** and monitor logs.  

---

## 🔥 **Future Enhancements**  
🔹 **WebSockets for Real-Time Updates** – Notify users instantly about new lost/found items.  
🔹 **Admin Dashboard** – Advanced control panel for managing user activity.  
🔹 **Machine Learning Integration** – AI-based image recognition to match lost items.  
🔹 **Cloud Storage for Images** – Store images in **Cloudinary** or **Firebase Storage**.  

---

## 🏗 **Contributing**  
🔹 **Fork the repository.**  
🔹 **Create a new branch:** `git checkout -b feature-branch`  
🔹 **Commit your changes:** `git commit -m "Added a new feature"`  
🔹 **Push to your forked repo:** `git push origin feature-branch`  
🔹 **Submit a pull request for review.**  

---

## 📜 **License**  
This project is licensed under the **MIT License**.  

---

## 🎯 **Final Thoughts**  
The **LostFinder backend** is built to be **secure, scalable, and efficient**, ensuring a smooth experience for users searching for their lost belongings.  

💡 **If you find this project useful, give it a ⭐ star on GitHub!**  

---

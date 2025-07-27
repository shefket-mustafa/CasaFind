# 🏠 CasaFind – Full-Stack Real Estate App (React + Express + MongoDB)

**CasaFind** is a full-stack real estate platform that allows users to browse, list, and manage property listings. It features secure user authentication, mock property data, and a responsive modern UI built with React and Tailwind CSS.

🔐 User authentication is fully functional using a Node.js + Express backend with MongoDB.

🏡 Property listings are currently mocked on the frontend for demonstration and testing purposes.

> **Note:** The backend is hosted on Render’s free tier and may take **30–50 seconds** to respond on first request due to **cold start delays**.

---

## 🔧 Tech Stack

**Frontend**  
- React + TypeScript  
- Tailwind CSS  
- React Router  
- Framer Motion  
- React Hook Form + Yup  

**Backend**  
- Node.js + Express  
- TypeScript  
- MongoDB + Mongoose  
- JWT Auth + Bcrypt  
- CORS, Dotenv

---

## 🚀 Features

- 🔐 User Authentication (Register, Login, Logout)
- 📬 Contact Form & About Page
- 🧑‍💼 **Admin Panel** (accessible only to authorized admin account)
- 🏠 Add & Manage Listings (Authenticated users only)
- 🔍 Search, Filter, Sort Listings
- 🖥️ Fully Responsive (Mobile & Desktop)
- 🌐 Deployed Frontend on Vercel  
- ☁️ Deployed Backend on Render

---

## 🔗 Live Demo

- 🌍 Frontend: [https://casa-find-flame.vercel.app/](https://casa-find.vercel.app)
- 🔌 Backend API: [https://casafind.onrender.com](https://casafind.onrender.com)

---


## 🧪 Test Accounts

You can log in with the following test accounts:

**Admin Account**  
- Email: `admin@abv.bg`  
- Password: `123456`  

**Regular User**  
- Email: `test@abv.bg`  
- Password: `123456`  

---

## 🗂 Project Architecture – CasaFind
```
CasaFind/
├── client/                      # Frontend
│   ├── public/                  # Static assets (index.html, icons, etc.)
│   ├── src/
│   │   ├── components/          # Reusable UI components (Header, Footer, ItemDetails, etc.)
│   │   ├── context/             # React context providers (AuthContext, PopUpContext, ListingsContext)
│   │   ├── pages/               # Main route pages (Home, Login, Register, Catalog, Details, etc.)
│   │   ├── auth-hooks/          # Custom hooks for login, register, logout
│   │   ├── utils/
│   │   │   ├── yup/             # Yup validation schemas (loginSchema, registerSchema, etc.)
│   │   │   └── requester.ts     # Reusable HTTP requester with token handling
│   │   ├── App.tsx              # Main App with routes
│   │   ├── main.tsx             # ReactDOM entry point
│   │   └── index.css            # Tailwind base styles
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   ├── tsconfig.json            # TypeScript config
│   └── vite.config.ts           # Vite config for React
│
├── server/                      # Backend (only for user auth)
│   ├── config.ts                # MongoDB connection setup
│   ├── models/                  # Mongoose models (User.ts)
│   ├── routes/                  # Express route handlers (authRoutes)
│   ├── server.ts                # Entry point for the Express app
│   ├── dist/                    # Compiled JS output from TypeScript
│   ├── package.json             # Server scripts and dependencies
│   ├── tsconfig.json            # TypeScript config
│   └── .env                     # Environment variables 
│
├── .gitignore                   # Ignored files/folders
├── README.md                    # Project overview
└── vercel.json                  # Client-side routing fix for Vercel
```


---

## ⚙️ Local Setup

### 1. Setup Back-End

```bash
git clone git@github.com:shefket-mustafa/CasaFind.git
cd CasaFind
cd server
npm install
npm run dev        
```


### 2. Setup Front-End

```bash
cd ../client
npm install
npm run dev
```



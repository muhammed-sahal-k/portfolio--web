# Muhammed Sahal K — MERN Stack Developer Portfolio

A world-class, luxury, responsive single-page portfolio website designed and developed for **Muhammed Sahal K**, featuring an Awwwards-grade dark theme (`#050816`), custom glassmorphism components, interactive particle canvas background, mouse glow, 3D tilt cards, dynamic project showcase, skills radar/cards, work experience timeline, and a production-ready Express & MongoDB contact backend.

---

## 🌟 Key Features

- **Luxury Single-Page UI/UX**: Dark theme (`#050816`), electric cyan (`#00E5FF`) & deep violet (`#7C3AED`) glowing accents, glassmorphism backdrop blurs.
- **Interactive Visual Effects**:
  - Custom magnetic glowing cursor.
  - Ambient mouse follower light.
  - Canvas 2D/3D particle constellation & floating polygons.
  - 3D card tilt perspective on hover.
  - Typewriter role switcher (*MERN Stack Developer*, *Freelance Full Stack Developer*, *React Developer*, *Node.js Developer*, *MongoDB Developer*, *Backend Developer*).
  - Floating profile image in a rotating neon gradient aura.
- **Dynamic Projects Showcase**:
  - 7 featured projects including *ApexTasks*, *Todo List*, *Calculator*, *Food Corner*, *BookMyShow Clone*, *The Odin Project*, and *Zinda Online School*.
  - Every project screenshot thumbnail and Live Demo button opens the corresponding deployment link.
- **Production MERN Backend**:
  - Express server with REST APIs (`POST /api/contact`, `GET /api/projects`).
  - Mongoose schema for MongoDB Atlas storage.
  - Input validation using `express-validator`.
  - Security headers using `helmet` & CORS enabled.

---

## 📁 Project Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── profile/            # Profile photo asset folder
│   │   │   └── projects/           # 7 Project screenshots folder (project1.png - project7.png)
│   │   ├── components/             # Reusable UI components (Navbar, TiltCard, MouseGlow, CanvasBackground, etc.)
│   │   ├── sections/               # Single-page sections (Hero, About, Experience, Skills, Projects, Education, Certificates, Contact)
│   │   ├── data/                   # Structured portfolio data source
│   │   ├── App.jsx                 # Main single page application wrapper
│   │   ├── main.jsx
│   │   └── index.css               # Tailwind & glassmorphism custom styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   ├── config/                     # MongoDB connection setup
│   ├── controllers/                # Contact and Project route controllers
│   ├── middleware/                 # Input validation & error handlers
│   ├── models/                     # Mongoose schemas for Contact & Project
│   ├── routes/                     # Express REST API routes
│   ├── app.js
│   ├── server.js                   # Node.js server entry point
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Frontend (React + Vite)
```bash
cd portfolio/client
npm install
npm run dev
```
The client will start automatically at `http://localhost:3000`.

### 2. Backend (Node.js + Express)
```bash
cd portfolio/server
npm install
npm run dev
```
The server will start at `http://localhost:5000`.

---

## 🖼️ How to Replace/Update Project Images

To update or replace any project screenshot:
1. Simply drop your image file into `portfolio/client/src/assets/projects/` named `project1.png` through `project7.png`.
2. To replace the profile photo, drop your image into `portfolio/client/src/assets/profile/profile.jpg`.
3. The application will automatically import and display the updated image assets cleanly!

---

## 🌐 Deployment Ready

- **Frontend**: Deploy `portfolio/client` to **Vercel** or **Netlify**.
- **Backend**: Deploy `portfolio/server` to **Render** or **Railway**.
- **Database**: Connect to your **MongoDB Atlas** cluster URI by updating `MONGO_URI` in `server/.env`.

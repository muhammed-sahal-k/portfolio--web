// // import dotenv from 'dotenv';


// // // Load environment variables
// // dotenv.config();

// import { connectDB } from './config/db.js';
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config({
//     path: path.join(__dirname, ".env")
// });

// import app from './app.js';

// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// // Start HTTP Server
// const server = app.listen(PORT, () => {
//   console.log(`=================================================`);
//   console.log(`🚀 Muhammed Sahal K Portfolio API Server Running`);
//   console.log(`🌐 Mode: ${process.env.NODE_ENV || 'development'}`);
//   console.log(`🔗 URL: http://localhost:${PORT}`);
//   console.log(`=================================================`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err) => {
//   console.error('[Unhandled Rejection]:', err.message);
// });














import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import app from "./app.js";

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log("EMAIL_USER =", process.env.EMAIL_USER);
  console.log("EMAIL_PASS =", process.env.EMAIL_PASS);

  console.log(`Server Running`);
});
// import dotenv from "dotenv";

// dotenv.config();

// import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import contactRoutes from './routes/contactRoutes.js';
// import projectRoutes from './routes/projectRoutes.js';
// import { errorHandler } from './middleware/errorHandler.js';

// const app = express();

// // Security HTTP headers
// app.use(helmet());

// // CORS configuration
// app.use(
//   cors({
//     origin: ['http://localhost:3000', 'http://127.0.0.1:3000', "https://portfolio-web-mu-six-14.vercel.app",],
//     credentials: true,
//   })
// );

// // Request Logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// // Body parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // API Endpoints
// app.use('/api/contact', contactRoutes);
// app.use('/api/projects', projectRoutes);

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   res.status(200).json({
//     status: 'ok',
//     message: 'Muhammed Sahal K Portfolio API is live',
//     timestamp: new Date().toISOString(),
//   });
// });

// // 404 handler for undefined routes
// app.use((req, res, next) => {
//   res.status(404).json({ success: false, message: `Route not found - ${req.originalUrl}` });
// });

// // Centralized error handler
// app.use(errorHandler);

// export default app;











































import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      process.env.CORS_ORIGIN,
    ],
    credentials: true,
  })
);

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend Running Successfully",
    timestamp: new Date().toISOString(),
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found : ${req.originalUrl}`,
  });
});

// Error Handler
app.use(errorHandler);

export default app;
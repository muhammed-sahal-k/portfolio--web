import express from 'express';
import { getProjects } from '../controllers/projectController.js';

const router = express.Router();

// GET /api/projects - Serve all portfolio projects
router.get('/', getProjects);

export default router;

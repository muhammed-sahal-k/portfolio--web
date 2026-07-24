import express from 'express';
import { submitContactForm, getContactMessages } from '../controllers/contactController.js';
import { validateContactRules, handleValidationErrors } from '../middleware/validateContact.js';

const router = express.Router();

// POST /api/contact - Submit a contact message
router.post('/', validateContactRules, handleValidationErrors, submitContactForm);

// GET /api/contact - Fetch submitted messages
router.get('/', getContactMessages);

export default router;

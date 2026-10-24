import express from 'express';
import { body } from 'express-validator';
import { createEnquiry } from '../controllers/enquiryController.js';
const router = express.Router();

router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
], createEnquiry);

export default router;
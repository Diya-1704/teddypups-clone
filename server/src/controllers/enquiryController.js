import { validationResult } from 'express-validator';
import pool from '../config/db.js';

export const createEnquiry = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { name, phone, email, message, puppySlug } = req.body;
    await pool.query(
      'INSERT INTO enquiries (name, phone, email, message, puppy_slug) VALUES (?, ?, ?, ?, ?)',
      [name, phone, email, message, puppySlug || null]
    );
    res.status(201).json({ message: 'Enquiry saved successfully' });
  } catch (err) { next(err); }
};
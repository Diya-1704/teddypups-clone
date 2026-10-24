import pool from '../config/db.js';

export const getTestimonials = async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) { next(err); }
};

import pool from '../config/db.js';

export const getFaqs = async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM faqs ORDER BY sort_order');
    res.json(rows);
  } catch (err) { next(err); }
};
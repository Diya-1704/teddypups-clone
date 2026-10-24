import pool from '../config/db.js';

export const getPuppies = async (req, res, next) => {
  try {
    const { status, origin, breed, gender } = req.query;
    let sql = 'SELECT * FROM puppies';
    const params = [];
    const conditions = [];

    if (status) { 
      conditions.push('status = ?'); 
      params.push(status); 
    }
    
    if (origin) { 
      conditions.push('origin = ?'); 
      params.push(origin); 
    }
    
    // Using LIKE for breed so "Poodle" matches "Toy Poodle"
    if (breed) { 
      conditions.push('breed LIKE ?'); 
      params.push(`%${breed}%`); 
    }
    
    if (gender) { 
      conditions.push('gender = ?'); 
      params.push(gender); 
    }

    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
    }
    
    sql += ' ORDER BY created_at DESC';

    const [rows] = await pool.query(sql, params);
    
    for (let pup of rows) {
      const [imgs] = await pool.query('SELECT url FROM puppy_images WHERE puppy_id = ? LIMIT 1', [pup.id]);
      pup.image = imgs.length > 0 ? imgs[0].url : 'https://via.placeholder.com/400';
    }
    
    res.json(rows);
  } catch (err) { 
    next(err); 
  }
};

export const getPuppyBySlug = async (req, res, next) => {
  try {
    const [puppies] = await pool.query('SELECT * FROM puppies WHERE slug = ?', [req.params.slug]);
    
    if (puppies.length === 0) {
      return res.status(404).json({ message: 'Puppy not found' });
    }
    
    const puppy = puppies[0];
    const [images] = await pool.query('SELECT url FROM puppy_images WHERE puppy_id = ? ORDER BY sort_order', [puppy.id]);
    
    puppy.images = images.map(img => img.url);
    res.json(puppy);
  } catch (err) { 
    next(err); 
  }
};
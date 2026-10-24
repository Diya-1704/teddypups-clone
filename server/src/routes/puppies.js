import express from 'express';
import { getPuppies, getPuppyBySlug } from '../controllers/puppyController.js';
const router = express.Router();
router.get('/', getPuppies);
router.get('/:slug', getPuppyBySlug);
export default router;
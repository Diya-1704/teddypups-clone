import express from 'express';
import cors from 'cors';
import puppyRoutes from './routes/puppies.js';
import faqRoutes from './routes/faqs.js';
import testimonialRoutes from './routes/testimonials.js';
import enquiryRoutes from './routes/enquiries.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());

app.use('/api/puppies', puppyRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/enquiries', enquiryRoutes);

app.use(errorHandler);
export default app;
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './config/db.js';

import dotenv from 'dotenv';
dotenv.config();
//import certificatesRoutes from './routes/certificates';
//import validationRoutes from './routes/validation';

const app = express();

connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
//app.use('/api/certificates', certificatesRoutes);
//app.use('/api/validation', validationRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

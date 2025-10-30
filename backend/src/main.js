import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
<<<<<<< HEAD
=======
import certificatesRoutes from './routes/certificates.routes.js';
>>>>>>> 5169aecd4ece1539ffd6fab2f59d7388b756754d
//import userRoutes from './routes/user.routes.js';
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
app.use(express.urlencoded({ extended: true })); // por si viene como form-urlencoded

// Rutas
app.use('/api/auth', authRoutes);
<<<<<<< HEAD
=======
app.use('/api/certificates', certificatesRoutes);
>>>>>>> 5169aecd4ece1539ffd6fab2f59d7388b756754d
//app.use('/api/users', userRoutes);
//app.use('/api/certificates', certificatesRoutes);
//app.use('/api/validation', validationRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

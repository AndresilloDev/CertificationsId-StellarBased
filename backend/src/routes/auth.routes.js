import express from 'express';

const router = express.Router();

//Controllers imports
import AuthController from '../controllers/auth.controller.js';

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/verify', AuthController.verify);

export default router;
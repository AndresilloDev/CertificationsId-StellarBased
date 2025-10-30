import express from 'express';
import CertificatesController from '../controllers/certificates.controller.js';

const router = express.Router();

router.post('/emit', CertificatesController.emitCertificate);

export default router;
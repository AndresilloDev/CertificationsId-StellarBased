const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const certificatesRoutes = require('./routes/certificates');
const validationRoutes = require('./routes/validation');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/certificates', certificatesRoutes);
app.use('/api/validation', validationRoutes);

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS izinleri (Frontend uygulamasından gelecek isteklere izin verir)
app.use(cors());
app.use(express.json());

// Yönergede istenen Endpoint 1: GET /
app.get('/', (req, res) => {
  res.json({ message: 'Backend application is running' });
});

// Yönergede istenen Endpoint 2: GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'UP' });
});

// Yönergede istenen Endpoint 3: GET /api/info
app.get('/api/info', (req, res) => {
  res.json({
    application: 'Backend Application',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'production'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
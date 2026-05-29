import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'AfriDollar Backend API is running' });
});

// API routes
app.get('/api/v1', (req, res) => {
  res.json({
    name: 'AfriDollar API',
    version: '0.1.0',
    description: 'Stellar-powered financial infrastructure API',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AfriDollar Backend API running on port ${PORT}`);
});

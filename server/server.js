import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import apiRoutes from './routes/routes.js'; 

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS || process.env.FRONTEND_URL || 'http://localhost:3000';

const server = createServer(app);
app.use(cors({
  origin: ALLOWED_ORIGINS,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);


const startServer = async () => {
    try {
        server.listen(PORT, () => {
            console.log('Server is running on port', PORT);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();

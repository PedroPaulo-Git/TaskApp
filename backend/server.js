import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
import router from './routes/routes.js';  // Importe o roteador de rotas
app.use('/', router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    
  });
  
export default app;
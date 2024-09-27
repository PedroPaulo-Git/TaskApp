import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
import router from './routes/routes.js';  // Importe o roteador de rotas
app.use('/', router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    
  });
  
export default app;
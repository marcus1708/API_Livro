import express from 'express';
import mongoose from 'mongoose';
import { setupSwagger } from './swagger';
import userRoutes from './routes/user.routes';
import bookRoutes from './routes/book.routes';
import storeRoutes from './routes/store.routes';
import cartRoutes from './routes/cart.routes';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

console.log('🔗 MONGO_URL:', process.env.MONGO_URL);

async function startServer() {
  const app = express();

  app.use(express.json());

  // ✅ Rota inicial
  app.get('/', (req, res) => {
    res.send('🚀 API Loja-Livro está no ar!');
  });

  await mongoose.connect(process.env.MONGO_URL as string);

  setupSwagger(app);

  app.use('/users', userRoutes);
  app.use('/books', bookRoutes);
  app.use('/stores', storeRoutes);
  app.use('/carts', cartRoutes);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('❌ Error starting server:', err);
});

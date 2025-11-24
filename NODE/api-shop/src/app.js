// Creation and configuration of the Express APP
import express from 'express';
import Product from './models/products.model.js'; 
import apiRoutes from './routes/api.routes.js'

const app = express();
app.use(express.json());


//Ejemplo para ver como se crea la coleccion con la primera llamada a su existencia
app.get('/', async(req,res)=>{
  const products = await Product.find(); //MongoDb tiene metodos predef de find, etcc y ademaas Mongoose incluye mÁS!!
  res.json(products);
})

// Route configuration
// Example:
// import apiRoutes from './routes/api.routes.js';
 app.use('/api', apiRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

export default app;

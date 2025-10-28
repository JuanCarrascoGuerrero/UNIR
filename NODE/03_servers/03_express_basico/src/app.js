// Creation and configuration of the Express APP
import express from 'express';

/* 
app.use() se utiliza para registrar middleware en tu aplicación Express. 
Un middleware es una función que puede acceder al objeto request (req), 
al objeto response (res), y a la función next() que permite pasar el control 
al siguiente middleware.S
*/

const app = express();
app.use(express.json());


// Route configuration   app.js --(routes)--> ./routes/api.routes.js
// Example:
import apiRoutes from './routes/api.routes.js';
app.use('/api', apiRoutes); //si url empieza por /api, usa apiRoutes

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

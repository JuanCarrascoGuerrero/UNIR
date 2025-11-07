
// Creation and configuration of the Express APP
const express = require("express");


const app = express();
app.use(express.json());


// Route configuration
// Example:
const apiRoutes = require('./routes/api.routes');
app.use('/api', apiRoutes);

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    });
});

//MANEJADOR GENÉRICO DE ERRORES ES VIP
//¡¡Ante errores no para la aplicación!!
// Error handler (tiene el (err...))
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

module.exports = app;

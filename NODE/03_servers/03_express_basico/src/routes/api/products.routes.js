import { Router } from 'express';
import { getAll } from '../../controllers/products.controller';

const router = Router();

// Define your routes here  
//<--- Aqui ya esta /api/products del discurso middleware hasta aquí
router.get('/', getAll)  //<-- Callback Referencia al Controller, donde se definen las funciones

export default router;

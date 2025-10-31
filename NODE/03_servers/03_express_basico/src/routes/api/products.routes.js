import { Router } from 'express';
import { createProduct, getAllProducts, getProductById, getProductPaged } from '../../controllers/products.controller';

const router = Router();

// Define your routes here  
//<--- Aqui ya esta /api/products del discurso middleware hasta aquí
router.get('/', getAllProducts)  //<-- Callback Referencia al Controller, donde se definen las funciones
router.get('/page', getProductPaged) 
router.get('/:productId', getProductById) 

router.post('/', createProduct)

export default router;

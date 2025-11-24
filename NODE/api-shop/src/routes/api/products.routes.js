import { Router } from 'express';
import { create, getAll, getByCategoryStock10, getById, remove, update } from '../../controllers/products.controller.js';

const router = Router();

// Define your routes here
router.get('/', getAll);
router.get('/:productId', getById);
//router.get('/:category', getByCategoryStock10); //Ojo!! Esta es cazada por la anterior!! Añadimos middle ware o...
router.get('/cat/:categoryName', getByCategoryStock10); //modifico url
router.post('/', create);
router.put('/:productId', update);
router.delete('/:productId', remove);

export default router;

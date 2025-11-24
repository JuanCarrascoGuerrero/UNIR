import { Router } from 'express';
import { create, getActives, getAll, getByCategoryStock10, getById, remove, update } from '../../controllers/products.controller.js';
import multer from 'multer';

const router = Router();

const upload = multer({dest:'public/'})

// Define your routes here
router.get('/', getAll);
router.get('/actives', getActives);
router.get('/:productId', getById);
//router.get('/:category', getByCategoryStock10); //Ojo!! Esta es cazada por la anterior!! Añadimos middle ware o...
router.get('/cat/:categoryName', getByCategoryStock10); //modifico url
router.post('/', upload.single('image'), create); //middleware de archivos, cuando llega create hay un req.file!!
router.put('/:productId', update);
router.delete('/:productId', remove);

export default router;

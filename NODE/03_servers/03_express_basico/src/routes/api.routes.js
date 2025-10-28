import { Router } from 'express';
import apiProducts from './api/products.routes'
import apiUsers from './api/users.routes'
import apiCategories from './api/categories.routes'

const router = Router();

// Define your routes here
router.use('/products', apiProducts);
router.use('/users', apiUsers);
router.use('/sategories', apiCategories);

export default router;

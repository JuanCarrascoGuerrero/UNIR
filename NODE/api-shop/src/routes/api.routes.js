import { Router } from 'express';
import apiProducts from '../routes/api/products.routes.js';
import apiUsers from '../routes/api/users.routes.js'
import { checkToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Define your routes here
router.use('/products', checkToken, apiProducts)
router.use('/users', apiUsers)

export default router;

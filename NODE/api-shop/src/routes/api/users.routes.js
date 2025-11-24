import { Router } from 'express';
import { addToCart, login, register } from '../../controllers/users.controller.js';
import { checkToken } from '../../middlewares/auth.middleware.js';

const router = Router();

router.post('/register',register)
router.post('/login',login)
router.patch('/add-cart',checkToken,addToCart)

export default router;

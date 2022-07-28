import { Router } from 'express';
const router = Router();

import { getProducts, getProductById, saveProduct, updateProduct, deleteProduct } from '../controllers/products.js';
import { checkAuth } from '../middlewares/middlewares.js';

/**************************************************/
/*****************    RUTAS    ********************/
/**************************************************/
// Devuelve todos los productos
router.get('/', getProducts);
// Devuelve un producto según su id
router.get('/:id', getProductById);
// Recibe y agrega un producto, lo devuelve con su id asignado
router.post('/', checkAuth, saveProduct);
// Recibe y actualiza un producto segun su id
router.put('/:id', checkAuth, updateProduct);
// Elimina un producto según su id
router.delete('/:id', checkAuth, deleteProduct);

export default router;
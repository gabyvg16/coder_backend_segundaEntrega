import { Router } from 'express';
const router = Router();

import { newCart, deleteCart, getProductsCart, saveProductsCart, deleteProductCart } from '../controllers/cart.js';

// /**************************************************/
// /*****************    RUTAS    ********************/
// /**************************************************/
// // Crea un carrito y devuelve su id
router.post('/', newCart);
// // Elimina un carrito según su id
router.delete('/:id', deleteCart);
// // Devuelve todos los productos de un carrito
router.get('/:id/productos', getProductsCart);
// // Recibe y agrega un producto en el carrito
router.post('/:id/productos', saveProductsCart);
// // Elimina un producto de un carrito según sus id
router.delete('/:id/productos/:id_prod', deleteProductCart);

export default router;
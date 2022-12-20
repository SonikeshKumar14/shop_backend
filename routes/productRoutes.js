const express = require('express');
const { addProduct, adminProduct, categoriesProduct, deleteProduct, 
findProduct, findProductbyid, reviewProduct, searchProduct, slugProduct, updateProduct 
} = require('../controllers/product.js');
const { isAuth, isAdmin } = require('../utils/utils.js');

const productRouter = express.Router();

productRouter.get('/', findProduct);
productRouter.post('/', isAuth, isAdmin, addProduct);
productRouter.put('/:id', isAuth, isAdmin, updateProduct);
productRouter.delete('/:id', isAuth, isAdmin, deleteProduct);
productRouter.post('/:id/reviews', isAuth, reviewProduct);
productRouter.get('/admin', isAuth, isAdmin, adminProduct);
productRouter.get('/search', searchProduct);
productRouter.get('/categories', categoriesProduct);
productRouter.get('/slug/:slug', slugProduct);
productRouter.get('/:id', findProductbyid);

module.exports = productRouter;
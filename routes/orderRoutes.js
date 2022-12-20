const express = require('express');
const { isAuth, isAdmin } = require('../utils/utils.js');
const { addOrder, deleteOrder, deleverOrder, findOrder, 
    findOrderbyid, mineOrder, orderFindbyid, summaryOrder } = require('../controllers/order.js');

const orderRouter = express.Router();

orderRouter.get('/', isAuth, isAdmin, findOrder);
orderRouter.post('/', isAuth, addOrder);
orderRouter.get('/summary', isAuth, isAdmin, summaryOrder);
orderRouter.get('/mine', isAuth, mineOrder);
orderRouter.get('/:id', isAuth, orderFindbyid);
orderRouter.put('/:id/deliver', isAuth, deleverOrder);
orderRouter.put('/:id/pay', isAuth, findOrderbyid);
orderRouter.delete('/:id',isAuth, isAdmin, deleteOrder);

module.exports = orderRouter;
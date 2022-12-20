const express = require('express');
// const seedController = require('../controllers/seed.js');
const data = require('../data/data');
const User = require('../models/userModel');
const Product = require('../models/productModel');
const seedRouter = express.Router();

// seedRouter.get('/', seedController);
seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
    })
module.exports = seedRouter;
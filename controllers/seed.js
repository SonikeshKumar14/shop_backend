
const Product = require('../models/productModel.js');
const data = require('../data/data.js');
const User = require('../models/userModel.js');

    exports.seedController = async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
    }
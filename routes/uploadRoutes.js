const express = require('express');
const multer = require('multer');
const { isAdmin, isAuth } = require('../utils/utils.js');
const { uploadCloud } = require('../controllers/upload.js');

const upload = multer();
const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, isAdmin, upload.single('file'), uploadCloud);
module.exports = uploadRouter;
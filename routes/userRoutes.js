const express = require('express');
const { profile, signIn, signUp, userDelete, 
userFind, userFindbyid, userUpdate } = require('../controllers/user.js');
const { isAuth, isAdmin } = require('../utils/utils.js');

const userRouter = express.Router();

userRouter.get('/', isAuth, isAdmin, userFind);
userRouter.get('/:id', isAuth, isAdmin, userFindbyid);
userRouter.put('/:id', isAuth, isAdmin, userUpdate);
userRouter.delete('/:id', isAuth,isAdmin, userDelete);
userRouter.post('/signin', signIn);
userRouter.post('/signup', signUp);
userRouter.put('/profile', isAuth, profile);

module.exports = userRouter;
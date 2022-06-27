import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();

const {
  registerValidator,
  loginValidator,
} = require('../middlewares/validators/testValidator');
const {
  registerUser,
  verifiedRegisterUser,
  createAccountForEmailVerifiedUser,
  loginUser,
} = require('../controllers/authController');

router.route('/register').post(registerValidator, registerUser);
router
  .route('/verified-register')
  .post(registerValidator, verifiedRegisterUser);
router
  .route('/create-account-for-email-verified')
  .post(createAccountForEmailVerifiedUser);

router.route('/login').post(loginValidator, loginUser);

module.exports = router;

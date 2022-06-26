import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();

const {
  registerValidator,
} = require('../middlewares/validators/testValidator');
const {
  registerUser,
  verifiedRegisterUser,
} = require('../controllers/authController');

router.route('/register').post(registerValidator, registerUser);
router
  .route('/verified-register')
  .post(registerValidator, verifiedRegisterUser);

module.exports = router;

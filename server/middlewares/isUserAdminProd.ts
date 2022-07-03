const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler.ts');

import { Request, Response } from 'express';

var isUserAdminProd = async (req: Request, res: Response, next: any) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = authorization.split(' ')[1];
      const { role } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //@ts-ignore

      if (role === 'admin') {
        return next();
      }

      return next(
        new ErrorHandler(
          'Not Authorized, only admin can access this route',
          401
        )
      );
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: 'Invalid Token,Unauthorized access is prohibited',
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'You are not logged in, please login first',
    });
  }
};

module.exports = isUserAdminProd;

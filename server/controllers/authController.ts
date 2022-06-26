import { Request, Response } from 'express';
//? Error Handlers
const ErrorHandler = require('../utils/errorHandler.ts');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//? Validators
const { registerValidator } = require('../middlewares/validators/joiValidator');

//?Models
const User = require('../models/userModel');

//? jwt
const { createGeneralJWT } = require('../utils/jwt');
const { template1 } = require('../utils/email-templates/template');

//sendgrid
const { sendEmail } = require('../utils/sendGrid');

//nodemailer
const { transporter } = require('../utils/sendEmail');

interface formData {
  name: string;
  email: string;
  password: string;
}

exports.registerUser = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    //*=============================================validate body data using
    //todo: JoiValidator , it will throw auto generated error as response
    const { name, email, password }: formData = req.body;
    //specifically sending selected form data to joi, as joi will response as error if extra fields are provided in req.body

    const formDataForValidation: formData = {
      email: email,
      name: name,
      password: password,
    };
    await registerValidator(formDataForValidation);

    //* ===================================================check if user already exist
    await User.findOne({ email }).exec((err: any, user: any) => {
      if (err) {
        //!END OF THIS FUNC
        return next(new ErrorHandler('Server Error, Try Again Later', 500));
      }
      if (user) {
        //!END OF THIS FUNC
        return next(new ErrorHandler('User already exists', 400));
      }
    });

    //*============================================================ If user dont exist,
    const newUser = new User({ name, email, password }); //? Create User Object based on User-Schema
    await newUser.save((err: any, success: any) => {
      if (err) {
        return next(
          new ErrorHandler('Error occured while saving user to db', 500)
        );
      }
      return res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: success,
      });
    }); //? Save User to DB
  }
);

exports.verifiedRegisterUser = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    //*=============================================validate body data using
    //todo: JoiValidator , it will throw auto generated error as response
    const { name, email, password }: formData = req.body;
    //specifically sending selected form data to joi, as joi will response as error if extra fields are provided in req.body

    const formDataForValidation: formData = {
      email: email,
      name: name,
      password: password,
    };
    await registerValidator(formDataForValidation);

    //* ===================================================check if user already exist
    await User.findOne({ email }).exec((err: any, user: any) => {
      if (err) {
        //!END OF THIS FUNC
        return next(new ErrorHandler('Server Error, Try Again Later', 500));
      }
      if (user) {
        //!END OF THIS FUNC
        return next(new ErrorHandler('User already exists', 400));
      }
    });

    //*============================================================ If user dont exist,
    //todo: send verification email with dynamic frontend link with user-data-that-need-to-be-created inside jsonwebtoken
    //todo: in gmail use will receive == localhost:3000/verify-email-for-creating-account/{TokenHavingUserAccountDataToBeCreated}
    //localhost:3000/verify-email-for-creating-account/:id/:token
    //on clicking verify, the client fetch token from url
    //and send to server at server's endpoint /api/create-user-account-after-verifying-jwt/:id  inside header Bearer token to verify
    //the server will verity that token , then fetch user-account-data and create account with that data

    const generatedToken = await createGeneralJWT(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      '1d'
    );

    const activationLink = `${process.env.PROD_CLIENT_URL}/verify-email-for-creating-account/${generatedToken}`;

    const emailContent = {
      subjectTitle: 'Please verify your email to activate your account',
      bodyContent: template1,
    };

    // const emailSentStatus = await sendEmail(
    //   email,
    //   process.env.EMAILFROM,
    //   emailContent
    // );
    // console.log(emailSentStatus);
    // if (emailSentStatus) {
    //   return res.status(200).json({
    //     success: true,
    //     message: 'Verification email sent successfully',
    //   });
    // } else {
    //   return next(new ErrorHandler('Error occured while sending email', 500));
    // }
  }
);

// backend/routes/api/users.js
const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a First name.')
      .isLength({ max: 50 })
      .withMessage('First name cannot exceed 50 characters'),
    check('firstName')
      .not()
      .isEmail()
      .withMessage('First name cannot be an email.'),
    check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a Last name.')
      .isLength({ max: 50 })
      .withMessage('Last name cannot exceed 50 characters'),
    check('lastName')
      .not()
      .isEmail()
      .withMessage('Last name cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

// Sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const signUpData = req.body;
      const user = await User.signup(signUpData);

      await setTokenCookie(res, user);

      return res.json({ user });
    })
);

module.exports = router;

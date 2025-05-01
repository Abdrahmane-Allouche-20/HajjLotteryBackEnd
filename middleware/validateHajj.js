const { check, validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

const validateHajj = [
  check('firstname')
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),

  check('lastname')
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),

  check('phone')
    .notEmpty().withMessage('Phone number is required')
    .matches(/^0\d{9}$/).withMessage('Phone number must start with 0 and be 10 digits long'),

  check('gender')
    .notEmpty().withMessage('Gender is required')
    .isIn(['male', 'female']).withMessage('Gender must be male or female'),

  check('birthdate')
    .notEmpty().withMessage('birthdate is required'),

  check('passport')
    .notEmpty().withMessage('Passport number is required')
    .isLength({ min: 6 }).withMessage('Passport number must be at least 6 characters'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateHajj;

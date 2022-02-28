const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// @desc  Register user
// @api   POST api/users
// @access  public
const registerUser = asyncHandler(async (req,res)=>{
    res.json({message: 'register user'})
})

// @desc  Authenticate user
// @api   POST api/users/login
// @access  public
const loginUser =asyncHandler(async (req,res)=>{
    res.json({message: 'Login user'})
})

// @desc  Get user Data
// @api   GET api/users/me
// @access  public
const getMe =asyncHandler(async (req,res)=>{
    res.json({message: 'Get my Data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}
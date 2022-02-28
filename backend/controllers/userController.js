const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// @desc  Register user
// @api   POST api/users
// @access  public
const registerUser = asyncHandler(async (req,res)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('please fill all the fields ...')
    }

    // chech if user exists
    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400);
        throw new Error('user already exists!');
    }

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
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

    // password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    // new user 
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if(user){
        res.status(201)
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else{
        res.status(400);
        throw new Error('invalid user data')
    }

})

// @desc  Authenticate user
// @api   POST api/users/login
// @access  public
const loginUser =asyncHandler(async (req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email})

    
    // user matches
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    } else{
        res.status(400)
        throw new Error('invalid credentials ...');
    }
})

// @desc  Get user Data
// @api   GET api/users/me
// @access  public
const getMe =asyncHandler(async (req,res)=>{
    res.json({message: 'Get my Data'})
})

// Generate jwt 
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}
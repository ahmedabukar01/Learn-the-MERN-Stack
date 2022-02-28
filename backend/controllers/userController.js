// @desc  Register user
// @api   POST api/users
// @access  public
const registerUser = (req,res)=>{
    res.json({message: 'register user'})
}
// @desc  login user
// @api   POST api/users/login
// @access  public
const loginUser = (req,res)=>{
    res.json({message: 'Login user'})
}

// @desc  Get user Data
// @api   GET api/users/me
// @access  public
const getMe = (req,res)=>{
    res.json({message: 'Get my Data'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}
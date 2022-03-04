const asyncHandler = require('express-async-handler');

const goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc : GET goals
// @route : GET /api/goals
// @access : Private
const getGoals = asyncHandler(async (req,res)=>{
    const goals = await goal.find({user: req.user.id});

    res.status(200).json(goals);
})
// @desc : Set goals
// @route : POST /api/goals
// @access : Private
const setGoal =asyncHandler(async (req,res)=>{
    
    if(!req.body.text){
        res.status(400) //.json({message: 'please fill in the text'})
        throw new Error('please fill in the text ...')
    }

    const goals = await goal.create({
        text: req.body.text,
        user: req.user.id
    });

    res.status(200).json(goals);
})
// @desc : UPDATE goals
// @route : PUT /api/goals/:id
// @access : Private
const updateGoal =asyncHandler(async (req,res)=>{
    const goals = await goal.findById(req.params.id);

    if(!goals){
        res.status(400)
        throw new Error('goal not found')
    }

    // check 
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401);
        throw new Error('user not found');
    }

    // check if the loggin user matches the user goals
    if(goals.user.toString() !== user.id){
        res.status(401);
        throw new Error('not authorized user')
    }

    const updatedGoal = await goal.findByIdAndUpdate(req.params.id,
        req.body, {new: true}
        )
    res.status(200).json({ message: `update Goal ${req.params.id}` });
})
// @desc : detele goals
// @route : DELETE /api/goals/:id
// @access : Private
const deleteGoal =asyncHandler(async (req,res)=>{
    const goals = await goal.findById(req.params.id);

    if(!goals){
        res.status(400)
        throw new Error('goal not found')
    }

    
    // check 
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401);
        throw new Error('user not found');
    }

    // check if the loggin user matches the user goals
    if(goals.user.toString() !== user.id){
        res.status(401);
        throw new Error('not authorized user')
    }

    // const deletedGoal = await goal.findByIdAndRemove(req.params.id)
    
    await goals.remove();

    res.status(200).json({ id: req.params.id });
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
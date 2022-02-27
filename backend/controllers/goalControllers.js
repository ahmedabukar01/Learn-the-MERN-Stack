const asyncHandler = require('express-async-handler');

const goal = require('../models/goalModel');

// @desc : GET goals
// @route : GET /api/goals
// @access : Private
const getGoals = asyncHandler(async (req,res)=>{
    const goals = await goal.find();

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

    res.status(200).json({ message: 'Create goals' });
})
// @desc : UPDATE goals
// @route : PUT /api/goals/:id
// @access : Private
const updateGoal =asyncHandler(async (req,res)=>{
    res.status(200).json({ message: `update Goal ${req.params.id}` });
})
// @desc : detele goals
// @route : DELETE /api/goals/:id
// @access : Private
const deleteGoal =asyncHandler(async (req,res)=>{
    res.status(200).json({ message: `delete Goal ${req.params.id}` });
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
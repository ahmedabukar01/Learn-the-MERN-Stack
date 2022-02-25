// @desc : GET goals
// @route : GET /api/goals
// @access : Private
const getGoals = (req,res)=>{
    res.status(200).json({ message: 'get goals' });
}
// @desc : Set goals
// @route : POST /api/goals
// @access : Private
const setGoal = (req,res)=>{
    
    if(!req.body.text){
        res.status(400) //.json({message: 'please fill in the text'})
        throw new Error('please fill in the text ...')
    }

    res.status(200).json({ message: 'Create goals' });
}
// @desc : UPDATE goals
// @route : PUT /api/goals/:id
// @access : Private
const updateGoal = (req,res)=>{
    res.status(200).json({ message: `update Goal ${req.params.id}` });
}
// @desc : detele goals
// @route : DELETE /api/goals/:id
// @access : Private
const deleteGoal = (req,res)=>{
    res.status(200).json({ message: `delete Goal ${req.params.id}` });
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
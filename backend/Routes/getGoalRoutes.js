const express = require('express')
const router = express.Router();

const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalControllers');
const {protect} = require('../middlewares/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, setGoal);

router.put('/:id',protect, updateGoal);
router.delete('/:id',protect, deleteGoal);

module.exports = router;
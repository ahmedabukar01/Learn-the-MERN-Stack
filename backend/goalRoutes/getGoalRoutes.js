const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({ message: 'get goals' });
})
router.post('/',(req,res)=>{
    res.status(200).json({ message: 'Create goals' });
})
router.put('/:id',(req,res)=>{
    res.status(200).json({ message: `update Goal ${req.params.id}` });
})
router.delete('/:id',(req,res)=>{
    res.status(200).json({ message: `delete Goal ${req.params.id}` });
})

module.exports = router;
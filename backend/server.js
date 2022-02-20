const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.Port || 5000;
const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./goalRoutes/getGoalRoutes'));

app.listen(PORT, ()=>console.log(`server is running ${PORT}`));
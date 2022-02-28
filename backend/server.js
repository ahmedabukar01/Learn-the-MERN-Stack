const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const {errorHandler} = require('./middlewares/errorHandler');
const connectDB = require('./config/db');

// Connect db
connectDB();


const PORT = process.env.PORT || 5000;
const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./Routes/getGoalRoutes'));
app.use('/api/users',require('./Routes/userRoutes'));

app.use(errorHandler)

app.listen(PORT, ()=>console.log(`server is running ${PORT}`));
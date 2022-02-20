const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.Port || 5000;

const app = express();

app.listen(PORT, ()=>console.log(`server is running ${PORT}`));
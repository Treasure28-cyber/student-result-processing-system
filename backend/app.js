require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

//app.use('/api/users', require('./routes/userRoutes'));
//app.use('/api/departments', require('./routes/departmentRoutes'));
//app.use('/api/courses', require('./routes/courseRoutes'));  

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
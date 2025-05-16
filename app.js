const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoute = require('./route/user.route');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB Connection
connectDB();

// Routes
app.use('/api', userRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
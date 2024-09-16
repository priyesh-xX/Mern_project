const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const inventoryRoutes = require('./routes/inventoryRoutes');
const demandRoutes = require('./routes/demandRoutes');  
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


connectDB();

// Routes
app.use('/api/inventory', inventoryRoutes);
app.use('/api/demand', demandRoutes);  

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

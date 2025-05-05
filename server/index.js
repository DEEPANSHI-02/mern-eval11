const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cors = require ('cors')
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/recipe',recipeRoutes)

app.get('/', (req, res) => {
    res.json({ message: "welcome to recipe " });
})
  
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
})



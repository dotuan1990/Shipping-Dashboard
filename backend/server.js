require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js')
const app = express();

app.use(express.json())
app.use(cors())

connectDB()

app.get("/", (req,res) => {res.send("Hotel Gateway API is running ....")})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

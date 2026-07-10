const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000
const jobRoutes = require("./routes/jobRoutes");

require("dotenv").config();

connectDB() //You call the database connection here 

const app = express();

app.use(cors()); //Allowed frontend to communicate with backend
app.use(express.json()) //Allows Express to receive JSON data from your React frontend.
app.use("/api/jobs", jobRoutes)

app.get("/", (req, res) => {
    res.send("Job Tracker Backend Running...")
})

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
})
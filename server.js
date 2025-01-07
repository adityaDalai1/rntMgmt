const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv")
const path = require('path');
const bodyParser = require("body-parser");
const connectDB = require('./config/db'); // Import the database connection function
const roomRoutes = require('./routes/roomRoutes'); // Import room routes
dotenv.config({ path: "./config.env"})


const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());

app.get("/", (req, res) => {
    res.send("HomePage Of The Rental Management App"); // Home page route
});

//SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
 });

app.use('/api', roomRoutes); // Use room routes with prefix '/api'

const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
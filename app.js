// app.js
const express = require('express');
const app = express();

// // Load environment variables
// require('dotenv').config();

// // Middleware
// // app.use(express.json()); // Parse JSON bodies
// // app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// // Routes
// const route = require('./routes/route');
// app.use('/express-api', route);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

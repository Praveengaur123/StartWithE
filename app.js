const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log('Middleware 1 executed');
  next(); 
});

// Middleware 2
app.use((req, res, next) => {
  console.log('Middleware 2 executed');
  next(); 
});

// Default Route
app.get('/', (req, res) => {
  res.send('<h1>Hello to Node.js</h1>');
});

// Start Server
app.listen(3000, () => {
  console.log('Server is on port 3000');
});
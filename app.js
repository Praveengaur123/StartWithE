const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to show the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required>
      <br>
      <label for="price">Price:</label>
      <input type="number" id="price" name="price" required>
      <br>
      <button type="submit">Add Product</button>
    </form>
  `);git
});

// Route to handle form submission
app.post('/add-product', (req, res) => {
  console.log('Form Data:', req.body); // Logs the parsed form data
  res.send('<h1>Product added successfully!</h1>');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST request handler for '/sendme' route
app.post('/sendme', (req, res) => {
  // Access the body of the POST request
  console.log('Received POST request body:', req.body);
  res.send('POST request received');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

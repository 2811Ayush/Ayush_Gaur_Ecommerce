// server.js (or any other server file)

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db'); // Assuming you have a separate file for database connection

app.use(bodyParser.json());

app.post('/api/submit-form', async (req, res) => {
  try {
    // Extract form data from request body
    const { firstName, lastName, mobile, email, address, landmark, country, state, zip } = req.body;

    // Perform any validation or processing on the form data

    // Insert the form data into the database
    const result = await db.insertFormData(firstName, lastName, mobile, email, address, landmark, country, state, zip);

    // Send a success response
    res.status(200).json({ success: true, message: 'Form data inserted successfully' });
  } catch (error) {
    // Send an error response
    console.error('Error inserting form data:', error);
    res.status(500).json({ success: false, message: 'Error inserting form data' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// db.js
const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database username
  password: 'root', // Replace with your database password
  database: 'ecom', // Replace with your database name
});

// Insert form data into the database
function insertFormData(formData) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      
      const query = 'INSERT INTO records (firstName, lastName, mobile, email, address, landmark, country, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [
        formData.firstName,
        formData.lastName,
        formData.mobile,
        formData.email,
        formData.address,
        formData.landmark,
        formData.country,
        formData.state,
        formData.zip,
      ];

      connection.query(query, values, (error, results) => {
        connection.release(); // Release the connection

        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  });
}

module.exports = {
  insertFormData,
};

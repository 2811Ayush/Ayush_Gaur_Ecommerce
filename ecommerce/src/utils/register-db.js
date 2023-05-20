const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ecom",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database!");
});

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  const query = "INSERT INTO register (name, email, password) VALUES (?, ?, ?)";
  connection.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error("Error inserting user:", err);
      res.status(500).json({ error: "Error registering user" });
      return;
    }
    res.status(200).json({ success: true });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

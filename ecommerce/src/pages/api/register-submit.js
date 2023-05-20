// pages/api/submit-form.js
import { insertFormData } from './register-db'; // Assuming you have a 'db.js' file for database operations

export default function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
    insertFormData(formData)
      .then(() => {
        res.status(200).json({ message: 'Form data submitted successfully' });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error submitting form data' });
      });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

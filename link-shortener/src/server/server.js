/* eslint-disable*/

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

app.get('/api/shorten-url', async (req, res) => {
  try {
    const longUrl = req.query.url;
    const response = await axios.post(
      'https://cleanuri.com/api/v1/shorten',
      { url: longUrl },
      { headers: { 'Content-Type': 'application/json' } }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying request to CleanURI API:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

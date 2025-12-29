const express = require('express');
const app = express();
const PORT = 8080; // Matches your custom port requirement

app.get('/', (req, res) => {
  res.send('HelloWorld from Node.js on port 8080!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

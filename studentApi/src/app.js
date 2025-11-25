const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Sample route
app.use('/api/v1/students', );

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
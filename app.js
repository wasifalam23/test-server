const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('hello from ec2');
});

module.exports = app;

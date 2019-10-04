const express = require('express');
const moment = require('moment');
const path = require('path');
const currentDir = __dirname;

const members = require('./src/Members');

// Create some middleware that intercepts all requests
const logger = (req, res, next) => {
  const now = moment().format();
  const { protocol } = req;
  const host = req.get('host');
  const page = req.originalUrl
  const requestedUrl = `${protocol}://${host}${page}`;
  console.log(`[${now}] ${requestedUrl}`);
  //------------------------------------------------
  //------------- BOTTOM OF FUNC -------------------
  next(); 
  //--------- DO NOT REMOVE. required!!! -----------
}

// Constants
const PORT = process.env.PORT || 5000;
const app = express();
// Middleware
app.use(express.static(path.join(currentDir, 'public')))
app.use(logger)

// API
app.get('/', (req, res) => {
  // res.send('Hello World');
  // res.json() JSON !
  // res.render() templates
  res.sendFile(path.join(currentDir, 'public', 'index.html'));
});

app.get('/api/members', (req, res) => {
  return res.json(members);
});

app.listen(
  PORT,
  () => console.log(`Server started on port ${PORT}`)
);
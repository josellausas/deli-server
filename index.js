const express = require('express');
const path = require('path');
const currentDir = __dirname;
// Constants
const PORT = process.env.PORT || 5000;
const app = express();
// Set static dir
app.use(express.static(path.join(currentDir, 'public')))

// HOME
app.get('/', (req, res) => {
  // res.send('Hello World');
  // res.json() JSON !
  // res.render() templates
  res.sendFile(path.join(currentDir, 'public', 'index.html'));
});

app.listen(
  PORT,
  () => console.log(`Server started on port ${PORT}`)
);
// Create web server
// 1. Create a web server
// 2. Create a route for '/'
// 3. Send a response to the client
// 4. Start the server
// 5. Visit localhost:3000 in the browser

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const comments = require('./data/comments');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { body } = req;
  const { name, comment } = body;
  if (name && comment) {
    comments.push({ name, comment });
    res.json(comments);
  } else {
    res.status(400).json({ error: 'Name and comment are required fields' });
  }
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
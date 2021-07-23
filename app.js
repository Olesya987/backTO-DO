const express = require('express')
const app = express();

app.get('/get', (req, res) => {
  // console.log('req', req.query);
  res.send(tasks);
});

app.post('/post', (req, res) => {
  // YOUR CODE
});

app.patch('/patch', (req, res) => {
  // YOUR CODE
});

app.delete('/del', (req, res) => {
  // YOUR CODE
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
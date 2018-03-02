const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/promo_submitter', async (req, res) => {
  try {
    res.send('success!');
  } catch (e) {
    res.status(400).send(e);
  };
});

app.listen(port, () => {
  console.log(`Server is up on ${port}!`);
});
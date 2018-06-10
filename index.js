const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');

const app = express();

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/newsletter', (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://us16.api.mailchimp.com/3.0/lists/ffe9fdc02f/members',
    headers: {
      'Postman-Token': '7ef95618-3d8d-4a31-b99d-2dc29ad893b1',
      'Cache-Control': 'no-cache',
      Authorization: 'Basic YXNkc2RzZDpiYjFlMDkyY2IwZmYwMWVkMmE1MGI0YTUwYzU5YTQ4ZC11czE2',
      'Content-Type': 'application/json',
    },
    body: {
      email_address: req.body.email,
      status: 'subscribed',
    },
    json: true,
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

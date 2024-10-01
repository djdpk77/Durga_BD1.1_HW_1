const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/whisper', (req, res) => {
  let name = req.query.name;
  let result = name.toLowerCase();
  res.send(result);
});

app.get('/full-product-name', (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  let fullProductName = companyName + ' ' + productName;
  res.send(fullProductName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + '/' + year;
  res.send(formattedDate);
});

app.get('/greet', (req, res) => {
  let city = req.query.city;
  let greeting = 'You live in ' + city;
  res.send(greeting);
});

app.get('/capital', (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;
  let countryCapital = capital + ' is the capital of ' + country;
  res.send(countryCapital);
});

app.get('/email', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  let email = firstName + '.' + lastName + '@' + domain;
  res.send(email);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

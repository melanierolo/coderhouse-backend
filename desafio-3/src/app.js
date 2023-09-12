// express
const express = require('express');
const app = express();
const PORT = 8585;

app.get('/greet', (req, res) => {
  res.send('Hello everyone - EXPRESS!!');
});

app.get('/user', (req, res) => {
  const user = {
    name: 'Elena',
    lastName: 'Portocarrero',
    age: 24,
    email: 'elena@gmail.com',
  };
  res.json(user);
});

//Params
app.get('/aparameter/:name', (req, res) => {
  console.log(req.params.name);
  res.send(`Welcome!!!,🙂🙂${req.params.name} `);
});

app.get('/aparameter/:name/:lastname', (req, res) => {
  console.log(req.params.name, req.params.lastname);
  res.send(`Welcome!!!,🙂🙂${req.params.name} ${req.params.lastname}`);
});

app.listen(PORT, () => {
  console.log(`Server listening: ${PORT}`);
});

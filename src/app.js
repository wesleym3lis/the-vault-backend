const express = require('express');
const dotenv = require('dotenv');
const db = require('./database');
const recordRoutes = require('./routes/routes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar o corpo da requisição como JSON
app.use(express.json());

app.use('/', recordRoutes);

//root
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});

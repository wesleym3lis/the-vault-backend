const express = require('express');
const dotenv = require('dotenv');
const db = require('./database');
const recordRoutes = require('./routes/routes');
const cors = require('cors');
const morgan = require('morgan');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

app.use('/', recordRoutes);

//root
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});

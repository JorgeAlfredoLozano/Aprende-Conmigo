const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});

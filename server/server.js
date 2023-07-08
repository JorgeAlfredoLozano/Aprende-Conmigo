const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { buffer } = req.file;
    const { upload_preset } = req.body;

    const response = await axios.post(`https://api.cloudinary.com/v1_1/drcun9brm/image/upload`, {
      file: buffer.toString('base64'),
      upload_preset,
    });

    res.json(response.data);
  } catch (error) {
    console.error('Hubo un error al subir la imagen a Cloudinary:', error);
    res.status(500).json({ error: 'Hubo un error al subir la imagen a Cloudinary' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});

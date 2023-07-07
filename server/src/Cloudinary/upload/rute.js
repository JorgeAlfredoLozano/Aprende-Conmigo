const { Router } = require("express");
const route = Router();
const multer = require('multer');
const busboy = require("busboy");
const cloudinary = require('cloudinary').v2;

const upload = multer({ dest: 'uploads/' });//aceptar subida imagenes

console.log(cloudinary.config().cloud_name);
console.log(cloudinary.config().api_key);
console.log(cloudinary.config().api_secret);

route.post('/upload', upload.single('image'), (req, res) => {
    // Subir imagen a Cloudinary
    cloudinary.uploader.upload(req.file.path, (error, result) => {
    if (error) {
        console.error('Error al subir la imagen:', error);
        return res.status(500).json({ error: 'No se pudo subir la imagen' });
    }

      // Eliminar el archivo temporal después de subirlo a Cloudinary

      // Enviar URL de la imagen subida en la respuesta
    res.json({ imageUrl: result.secure_url });
    });
});

module.exports = route
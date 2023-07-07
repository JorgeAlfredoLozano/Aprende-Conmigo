const route = Router();
const { Router } = require("express");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const upload = multer({ dest: 'uploads/' });

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
    fs.unlinkSync(req.file.path);

      // Enviar URL de la imagen subida en la respuesta
    res.json({ imageUrl: result.secure_url });
    });
});

  // Iniciar el servidor


module.exports = route
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const path = require('path');

console.log(cloudinary.config().cloud_name);
console.log(cloudinary.config().api_key);
console.log(cloudinary.config().api_secret);

const imagePath = path.join(__dirname, 'Assets', 'cat.jpg')

cloudinary.uploader.upload(imagePath)
	.then(result => {console.log(result)})
	.catch(error => {console.error(error)});

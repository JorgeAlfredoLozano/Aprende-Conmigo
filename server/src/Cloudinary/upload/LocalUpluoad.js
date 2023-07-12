require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const path = require('path');

console.log(cloudinary.config().cloud_name);
console.log(cloudinary.config().api_key);
console.log(cloudinary.config().api_secret);

const imagePath = path.join(__dirname, 'Assets', 'cat.jpg')
const imagePath2 = path.join(__dirname, 'Assets', 'banner.jpeg')

cloudinary.uploader.upload(imagePath)
	.then(result => {console.log(result)})
	.catch(error => {console.error(error)});

cloudinary.uploader.upload(imagePath2)
	.then(result => {console.log(result)})
	.catch(error => {console.error(error)});

require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.config().cloud_name);
console.log(cloudinary.config().api_key);
console.log(cloudinary.config().api_secret);

cloudinary.uploader.upload("./Assets/cat.jpg")
	.then(result => {console.log(result)})
	.catch(error => {console.error(error)});

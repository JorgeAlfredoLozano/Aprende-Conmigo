require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.url("https://images.pexels.com/photos/14761034/pexels-photo-14761034.jpeg", {type: "fetch"}));
console.log(cloudinary.url("https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg",{type: "fetch"}))
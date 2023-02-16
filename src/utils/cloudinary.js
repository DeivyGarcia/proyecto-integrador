const cloudinary = require('cloudinary');

cloudinary.config({ 
   cloud_name: process.env.CLOUDNAME, 
   api_key: process.env.CLOUDAPIKEY, 
   api_secret: process.env.CLOUDAPISECRET
 });

 module.exports = cloudinary;

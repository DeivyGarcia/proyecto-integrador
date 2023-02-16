const mongoose = require('mongoose');

const ProductSchema = new  mongoose.Schema({
   id: {
      type: Number,
      //required: true
   },
   name: { 
      type: String,
      //required: true
   },
   marca: {
      type: String,
      //required: true
   },
   precio: {
      type: Number,
      //required: true
   },
   stock: {
      type: Number,
      //required: true
   },
   img: {
      type: String
   },
   cloudinary_id: {
      type: String
   },
   categoria:{
      type: String,
      //required: true
   },
   edad_desde: {
      type: Number,
      //required: true
   },
   edad_hasta: {
      type: Number,
      //required: true
   },
   description: {
      type: String,
      //required: true
   },
   Description_long: {
      type: String,
      //required: true
   }
})

const productos = mongoose.model('productos', ProductSchema)

module.exports = productos
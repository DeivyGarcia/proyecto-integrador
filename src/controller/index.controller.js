const productos = require('../models/produts.model');

const controller = {}

controller.index = async(req, res)=>{
   try {
      const producto = await productos.find().lean();
      res.render('home', {producto: producto})
   } catch (error) {
      console.log('algo fallo: ', error);
   }
}
controller.home = async(req, res)=>{
   try {
      const producto = await productos.find().lean();
      res.render('home', {producto: producto, layout: false})
   } catch (error) {
      console.log('algo fallo: ', error);
   }
}
controller.mostrarProducto = async (req, res)=>{
   res.render('alta', {layout: false})
}

controller.contact = (req, res)=>{
   
   res.render('contact', {layout: false}
      )
}
controller.about = (req, res)=>{
   res.render('about',{layout: false}
      )
}
module.exports = controller


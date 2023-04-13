const express = require("express");
const productos = require("../models/productos");


const cloudinary = require('cloudinary').v2;

const multer =require('multer');

const router = express.Router();


const upload = multer({dest: 'uploads/' })
router.post("/productsImage", upload.single('Imagen'), (req, res) => {
  
  const producto= productos(req.body);

  if (req.file) {
    // Si se subió una imagen, cargarla a Cloudinary
    cloudinary.uploader.upload(req.file.path, { folder: 'img' })
      .then(result => {
        // Agregar la URL de la imagen a las propiedades del producto
        producto.Imagen = result.secure_url;

        // Guardar el producto en la base de datos
        producto.save()
          .then(data => res.json(data))
          .catch(error => res.json({ message: error }));
      })
      .catch(error => {
        // Manejar el error
        console.log(error);
        res.status(500).send(error);
      });
  } else {
    // Si no se subió una imagen, simplemente guardar el producto en la base de datos
    producto.save()
      .then(data => res.json(data))
      .catch(error => res.json({ message: error }));
  }
});

//crear productos
router.post("/productos",(req,res)=>{
    const prod = productos(req.body);
    prod.save()
                .then((data)=> res.json(data))
                .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/productos',(req,res)=>{
    productos.aggregate([
        {
            $lookup:{
                from:'categorias',
                localField:'nombreCategoria', 
                foreignField:'_id', 
                as:'nombreCategoria'
            }
        }
    ])
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//exportar
module.exports = router ;
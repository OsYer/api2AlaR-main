const express = require("express");
const categorias = require("../models/categorias");

const router = express.Router();

//crear categoria
router.post("/categorias",(req,res)=>{
    const categoriass = categorias(req.body);
    categoriass.save()
                .then((data)=> res.json(data))
                .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/categorias',(req,res)=>{
    categorias
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


//exportar
module.exports = router ;
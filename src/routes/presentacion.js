const express = require("express");
const presentacion = require("../models/presentacion");

const router = express.Router();

//crear presentacion
router.post("/presentacion",(req,res)=>{
    const pre = presentacion(req.body);
    pre.save()
                .then((data)=> res.json(data))
                .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/presentacion',(req,res)=>{
    presentacion
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//exportar
module.exports = router ;
const express = require("express");
const preguntas = require("../models/preguntas");

const router = express.Router();

//crear preguntas
router.post("/preguntas",(req,res)=>{
    const preguntasss = preguntas(req.body);
    preguntasss.save()
                .then((data)=> res.json(data))
                .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/preguntas',(req,res)=>{
    preguntas
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//exportar
module.exports = router ;
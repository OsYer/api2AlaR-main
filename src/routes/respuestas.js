const express = require("express");
const respuestas = require("../models/respuestas");

const router = express.Router();

//crear respuestas
router.post("/respuestas",(req,res)=>{
    const respuesta = respuestas (req.body);
    respuesta.save()
                .then((data)=> res.json(data))
                .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/respuestas',(req,res)=>{
    respuestas.aggregate([
        {
            $lookup:{
                from:'preguntas',
                localField:'preg', 
                foreignField:'_id', 
                as:'preg'
            }
        }
    ])
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


//exportar
module.exports = router ;
const express = require("express");
const tipousuarios = require("../models/tipousuarios");

const router = express.Router();

//crear tipousuarios
router.post("/tipousuarios",(req,res)=>{
    const tp = tipousuarios(req.body);
    tp.save()
                .then((data)=> res.json(data))
                .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/tipousuarios',(req,res)=>{
    tipousuarios
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//consulta id
router.get('/tipousuarios/:id',(req,res)=>{/// aun no se como hacerle xd
    const {id} = req.params;
    tipousuarios
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/tipousuarios/:id',(req,res)=>{
    const {id} = req.params;
    const {nombreTipoUser} = req.body;
    tipousuarios
    .updateOne({_id:id},{$set:{nombreTipoUser}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/tipousuarios/:id',(req,res)=>{
    const {id} = req.params;
    tipousuarios.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


//exportar
module.exports = router ;
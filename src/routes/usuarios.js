const express = require("express");
const usuarios = require("../models/usuarios");

const router = express.Router();

//crear usuarios
router.post("/usuarios",(req,res)=>{
    const {nombre,apellidopa,apellidoma,correo,pwd,telefono,nombreTipoUser}=req.body;

    const user=new usuarios({
        nombre:nombre,
        apellidopa:apellidopa,
        apellidoma:apellidoma,
        correo:correo,
        pwd:pwd,
        telefono:telefono,
        nombreTipoUser:'642b4197d270aa4a64ba286d'
    });

    user.save()
                .then((data)=> res.json(data))
                .catch((error)=>res.json({message:error}));
});

//consultar
router.get('/usuarios',(req,res)=>{
    usuarios.aggregate([
        {
            $lookup:{
                from:'tipousuarios',
                localField:'nombreTipoUser',
                foreignField:'_id',
                as:'nombreTipoUser'
            }
        }
    ])
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

///actualizar
router.put('/usuarios/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre,apellidopa,apellidoma,correo,pwd,telefono,nombreTipoUser}=req.body;

    usuarios
    .updateOne({_id:id},{$set:{nombre,apellidopa,apellidoma,correo,pwd,telefono,nombreTipoUser}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//eliminar 
router.delete('/usuarios/:id',(req,res)=>{
    const {id} = req.params;
    usuarios.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


//exportar
module.exports = router ;
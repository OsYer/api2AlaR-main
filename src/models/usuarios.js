const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
            nombre :{
                type: String,
                required: true,
            },
            apellidopa :{
                type: String,
                required: true,
            },
            apellidoma :{
                type: String,
                required: true,
            },
            correo :{
                type: String,
                required: true,
                unique:true
            },
            pwd :{
                type: String,
                required: true,
            },
            telefono :{
                type: Number,
                required: true,
            },
            nombreTipoUser:{
                type: Schema.Types.ObjectId,
                ref:"tipousuarios",//verificar si esta bn
                require:true
            }
            
})

module.exports = mongoose.model("usuarios",userSchema);
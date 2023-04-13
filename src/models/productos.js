const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
            nombreProducto :{
                type: String,
                required: true,
            },
            descripcion :{
                type: String,
                required: true,
            },
            precio :{
                type: Number,
                required: true,
            },
            disponibilidad:{
                type:Number,
                required:true,
            },
            nombreCategoria:{
                type: Schema.Types.ObjectId,
                ref:"categorias",
                require:true,
            },
            nombrePresentacion:{
                type: Schema.Types.ObjectId,
                ref:"presentaciones",
                require:true,
            }, Imagen:{
                type:String,
                required:true
            },

})

module.exports = mongoose.model("productos",userSchema);
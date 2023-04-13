const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
            nombreCategoria :{
                type: String,
                required: true
            }
})

module.exports = mongoose.model("categorias",userSchema);
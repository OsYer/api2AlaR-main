const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
            nombreTipoUser :{
                type: String,
                required: true
            }
})

module.exports = mongoose.model("tipoUsuarios",userSchema);
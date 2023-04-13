const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
            nombrePresentacion :{
                type: String,
                required: true
            }
})

module.exports = mongoose.model("presentaciones",userSchema);
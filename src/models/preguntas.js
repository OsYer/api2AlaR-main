const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
            preg :{
                type: String,
                required: true
            }
})

module.exports = mongoose.model("preguntas",userSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
            preg:{
                type: Schema.Types.ObjectId,
                ref:"preguntas",//verificar si esta bn
                require:true
            },
            resp :{
                type: String,
                required: true
            }
           
})

module.exports = mongoose.model("respuestas",userSchema);
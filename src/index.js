const express = require ("express");
const mongoose = require("mongoose");
require("dotenv").config();

//se agregan los enlaces de rutas de la carpeta ROUTERS
const  categorias =  require("./routes/categorias");
const  preguntas =  require("./routes/preguntas");
const  presentacion =  require("./routes/presentacion");
const  productos =  require("./routes/productos");
const  tipousuarios =  require("./routes/tipousuarios");
const  usuarios =  require("./routes/usuarios");
const respuestas = require("./routes/respuestas");

//settings
const app = express();
const port = process.env.PORT || 9000;

//middle
app.use(express.json());
app.use("/api", categorias);
app.use("/api", preguntas);
app.use("/api", presentacion);
app.use("/api", productos);
app.use("/api", tipousuarios);
app.use("/api", usuarios);
app.use("/api", respuestas);

//routes
app.get("/",(req,res)=>{
    res.send("Bienvenido a mi API, SOCIEDAD MACHISTA ");
}); 

//conectarse a la base de datos de mongo\
mongoose.connect("mongodb+srv://WasakaBegein:wasakabegein@clusteralan.rnfab7j.mongodb.net/ProyectoFinal?retryWrites=true&w=majority")
        .then(()=> console.log("Conectado a la Base de Datos MongoDB , MACHISTA"))
        .catch((error)=>console.error(error));


        //servidor arrancando
app.listen(port , ()=> console.log("Servidor arrancando en el puerto :",port));


const express = require('express');// Aca se importa la biblioteca express
const app = express();// Aca estoy usando la biblioteca

//Con esta instruccion se crea un Endpoint
app.get("/users",(request, response) =>{
    response.send("Hola mundo")
}); 
app.listen(3000, ()=>{
    console.log("server running on port 3000");
})


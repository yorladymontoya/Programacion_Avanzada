

const express = require('express');// Aca se importa la biblioteca express
const app = express();// Aca estoy usando la biblioteca

//middelewards - para configurar como va a recibir los datos
app.use(express.json());

//Con esta instruccion se crea un Endpoint
app.get("/users",(request, response) =>{
    console.log(request.query);
    response.send("Hola mundo")
}); 
app.post("/register",(request, response) =>{
    console.log(request.body);
    response.send("Hello world")
}); 
app.put("/updateUser",(request, response) =>{
    console.log(request.body);
    response.send("Hello world")
}); 
app.delete("/deleteUser",(request, response) =>{
    console.log(request.body);
    response.send("Hello world")
}); 
//Aca se crea el servidor
app.listen(3000, ()=>{
    console.log("server running on port 3000");
})


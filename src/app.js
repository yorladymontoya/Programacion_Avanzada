

//const express = require('express');// Aca se importa la biblioteca express
import express from 'express';
import mongoose from 'mongoose';
import CompanyModel from './models/CompanyModel.js';

const app = express();// Aca estoy usando la biblioteca
const port = 3000;

//middelewards - para configurar como va a recibir los datos
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        const data = await CompanyModel.find().limit(10);
        res.json(data);
    }catch(e){
        res.json(e)
    }

})

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
app.listen(port, async ()=>{
    try{
    await mongoose.connect('mongodb://localhost:27017/TestDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

    })
}catch(e){
    console.log("Error de conexion a la DB")
}
    console.log(`Exaple app listening at http://localhost:${port}`);
})


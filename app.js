require("dotenv-flow").config()
const {DB_CONNECTION} = process.env


const express = require('express');


const mongoose = require("mongoose")

const router = require ('./routing')

const app = express();
app.use(express.json());


require('express-async-errors');






app.use(async (req,res,next) => {
    await mongoose.connect(DB_CONNECTION)
    console.log("Bien connecté à la DB");
    next();
})


app.use('/api',router)






app.listen(8010 , () =>{
    console.log("La connexion est faites,dieu soit loué")
})
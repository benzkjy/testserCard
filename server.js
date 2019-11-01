const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();

const db = "mongodb://127.0.0.1:27017/khajornyot";

const card = require('./routes/card');

//Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/card", card);

mongoose
    .connect(db)
    .then(()=>console.log(`MongoDB connected`))
    .catch(err => console.log(err));

app.get("/",(req,res)=>{
    res.send("Hi");
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`server running port ${port}`));
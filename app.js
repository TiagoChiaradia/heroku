const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;  //SE NAO RECEVER PORTA, USA A 3000

app.get('/', (req,res) => {
    res.render("home.ejs")
    return res.send({ message: 'Tudo OK com este método get'}); 
});

app.post('/', (req,res) => {
    return res.send({ message: 'Tudo OK com este método post'});
});

app.listen(port,()=>{
    console.info("Aplicação Rorando")
});

module.exports = app;
const express = require('express');
const sequelize = require('./database/sequelize');
const app = express();
const usuarioroute = require ('./routes/UsuarioRoute');
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//sequelize.sync() //Server para criar a tabela apartir do model.  

app.use('/u',usuarioroute);


app.listen(5000);


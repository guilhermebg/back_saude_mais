const express = require('express');
const sequelize = require('./database/sequelize');
const app = express();
const cors = require('cors');
const usuarioroute = require ('./routes/UsuarioRoute');
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//sequelize.sync() //Server para criar a tabela apartir do model.  
app.use('/u',usuarioroute);
app.listen(5000);


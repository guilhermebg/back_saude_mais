const Sequelize = require('sequelize');
const configDatabase = require('./database');

const sequelize = new Sequelize(configDatabase);// Estou criando o objeto sequelize utilizando os arquivos de configuração do banco

module.exports = sequelize
const sequelize = require("../database/sequelize");
const Sequelize = require('sequelize')
const Usuario = sequelize.define('usuarios', {
    id: {
        //field:'usuarioid',
        type: Sequelize.INTEGER,//Informando  o Tipo do Dado como Inteiro
        autoIncrement: true,//Para ele autoincrementar
        primaryKey: true//Informando que essa é a chave primaria
    },
    name: {
        //field: 'name',
        type: Sequelize.STRING,//Informando  o Tipo do Dado como String
        allowNull:false // Não aceita Nulo
    },
    sobrenome:{
        type: Sequelize.STRING//Informando  o Tipo do Dado como String
    },
    email:{
        type: Sequelize.STRING,//Informando  o Tipo do Dado como String
        unique:true// Não aceita dado Repetido
    },
    cpf :{
        type: Sequelize.STRING(11),//Informando  o Tipo do Dado como String com 11 caracteres
        unique:true, // Não aceita dado Repetido
        allowNull:false // Não aceita Nulo
    },
    deleteat :{
        type: Sequelize.DATE//Informando  o Tipo do Dado como data
    },
},{
    timestamps: false,
    tableName: 'usuarios'
})

module.exports = Usuario;
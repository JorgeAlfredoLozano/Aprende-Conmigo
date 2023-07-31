const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('Login', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey:true
    },
    email:{
    type:DataTypes.STRING,
    },
    password:{
    type:DataTypes.STRING,
    },
},{timestamps:false,freezeTableName:true}
)}


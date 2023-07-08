const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('Lesson', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey:true
    },
    lesson_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
   
},{timestamps:false,freezeTableName:true}
)}
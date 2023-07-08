const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('Publication', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,  
        primaryKey:true
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    about_class:{
        type: DataTypes.STRING,
        allowNull:false
    },
    about_teacher:{
        type: DataTypes.STRING,
        allowNull:false
    },
   
    value:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    pub_image:{
        type:DataTypes.BLOB,
        allowNull:false
    },
    grade:{
        type:DataTypes.STRING,
        values:['Primaria','Secundaria','Universidad'],
        allowNull:false
    }
},{timestamps:false,freezeTableName:true}
)}
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
    mode:{
        type:DataTypes.ENUM('Remote', 'AtHome', 'YourHome'),
        defaultValue:('Remote')
    },
    value:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    Pub_image:{
        type:DataTypes.BLOB,
        allowNull:false
    }

},{timestamps:false,freezeTableName:true}
)}
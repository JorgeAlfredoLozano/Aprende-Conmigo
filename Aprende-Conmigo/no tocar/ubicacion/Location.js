const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('Location', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,  
        primaryKey:true
    },
    street:{
        type: DataTypes.STRING,
        allowNull:false
    },
    number:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apartment:{
        type: DataTypes.STRING,
    },
    floor:{
        type: DataTypes.STRING,
    }

},{timestamps:false,freezeTableName:true}
)}
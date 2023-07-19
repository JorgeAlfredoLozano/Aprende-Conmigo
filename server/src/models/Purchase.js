const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('Purchase', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,  
        primaryKey:true
    },
    hora:{
        type: DataTypes.INTEGER

    },
    datePurchase:{
        type:DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW
    }}
,{timestamps:false,freezeTableName:true}
)}
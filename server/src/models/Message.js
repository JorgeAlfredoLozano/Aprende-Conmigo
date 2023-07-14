const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    idSend: {
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: true,
    },
    idReceived: {
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, { timestamps: false, freezeTableName: true });

};

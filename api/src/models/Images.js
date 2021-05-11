const { DataTypes } = require('sequelize');

// Connect to sequelize and export the function model

module.exports = (sequelize) => {
  // Defining model
  sequelize.define('image', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    photo: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      isUrl: true,
    },
  });
};

const { DataTypes } = require('sequelize');

// Connect to sequelize and export the function model

module.exports = (sequelize) => {
  // Defining model
  sequelize.define('property', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
  });
};

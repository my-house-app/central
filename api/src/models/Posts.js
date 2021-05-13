// This is the publication
const { DataTypes } = require('sequelize');

// Connect to sequelize and export the function model

module.exports = (sequelize) => {
  // Defining model
  sequelize.define('post', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    premium: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    prop_type: {
      type: DataTypes.STRING,
      isIn: [['Casa', 'Apartamento']],
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
    },
    stratum: {
      type: DataTypes.INTEGER,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    m2: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    years: {
      type: DataTypes.INTEGER,
    },
    pool: {
      type: DataTypes.BOOLEAN,
    },
    backyard: {
      type: DataTypes.BOOLEAN,
    },
    gym: {
      type: DataTypes.BOOLEAN,
    },
    bbq: {
      type: DataTypes.BOOLEAN,
    },
    parking_lot: {
      type: DataTypes.BOOLEAN,
    },
    garden: {
      type: DataTypes.BOOLEAN,
    },
    elevator: {
      type: DataTypes.BOOLEAN,
    },
    security: {
      type: DataTypes.BOOLEAN,
    },
    status: {
      type: DataTypes.STRING,
      isIn: [['Available', 'Expired', 'Not-available']],
    },
  });
};

const { DataTypes } = require('sequelize');

// Connect to sequelize and export the function model

module.exports = (sequelize) => {
  // Defining model
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      // unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    photo: {
      type: DataTypes.STRING,
      isUrl: true,
    },
    city: {
      type: DataTypes.STRING,
    },
    street_number: {
      type: DataTypes.STRING,
    },
    zip_code: {
      type: DataTypes.STRING,
    },

    // favorites: { lo comento porque al moemnto de connectarme a la db da error @renny
    //   type: DataTypes.ARRAY,
    // },

    //  favorites: {
    //    type: DataTypes.ARRAY,
    //  },

  });
};

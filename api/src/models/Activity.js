const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
     duration:{
         type: DataTypes.FLOAT,
         allowNull: true
     },
    season:{
        type: DataTypes.ENUM('Spring', 'Summer', 'Autumn', 'Winter'),
        allowNull: true
    } 
  });
};
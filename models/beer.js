'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    style: DataTypes.STRING,
    ibu: DataTypes.INTEGER,
    color: DataTypes.STRING
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
  };
  return Beer;
};
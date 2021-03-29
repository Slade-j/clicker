'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    discription: DataTypes.TEXT
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};
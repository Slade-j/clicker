'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    ownerId: DataTypes.INTEGER,
    isPrivate: DataTypes.BOOLEAN,
    photoUrl: DataTypes.STRING,
    discription: DataTypes.TEXT
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};
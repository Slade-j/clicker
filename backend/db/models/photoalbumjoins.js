'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotoAlbumJoins = sequelize.define('PhotoAlbumJoins', {
    photoId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  PhotoAlbumJoins.associate = function(models) {
    // associations can be defined here
  };
  return PhotoAlbumJoins;
};
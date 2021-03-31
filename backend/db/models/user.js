'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 50] }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 50] }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3, 255] }
    },
    hashedPassword:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [60, 60] }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [2, 255] }
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: { len: [1, 255] }
    },
    profilePicUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: { attributes: { exclude: ['hashedPassword'] } },
      loginUser: { attributes: {} }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.toSafeObject = function() {
    const { id, firstName, lastName, email, createdAt } = this;
    return { id, firstName, lastName, email, createdAt };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: { email: credential }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function (signUpData) {
    const {
      firstName,
      lastName,
      email,
      password
    } = signUpData;

    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};

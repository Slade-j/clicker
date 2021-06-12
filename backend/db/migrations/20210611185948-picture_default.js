'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Users', 'profilePicUrl', {
        type: Sequelize.STRING(255),
        defaultValue: 'https://i.imgur.com/tdi3NGa.jpg',
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Users', 'profilePicUrl', {
        type: Sequelize.STRING(255),
        allowNull: true
      }),
    ]);
  }
};

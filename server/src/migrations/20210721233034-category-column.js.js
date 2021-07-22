'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'product',
      'category', 
      {
        type : Sequelize.STRING,
        allowNull: false
      }  
     )
  },

};

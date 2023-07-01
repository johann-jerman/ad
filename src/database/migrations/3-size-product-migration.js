'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SizeProduct', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sizes',
          key: 'id'
      },
      },
      product_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'products',
            key: 'id'
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }  
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SizeProduct');
  }
};
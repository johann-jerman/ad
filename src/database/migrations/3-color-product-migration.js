'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('color_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'colors',
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
    await queryInterface.dropTable('color_products');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name : {
        type : Sequelize.STRING(100),
        allowNull : false,
      },
      care : {
          type : Sequelize.TEXT,
          allowNull : true
      },
      description : {
          type : Sequelize.TEXT,
          allowNull : false,
      },
      price : {
          type : Sequelize.INTEGER,
          allowNull : false,
      },
      category_id: {
          type : Sequelize.INTEGER,
          references: {
            model: 'categorysproduct',
            key: 'id'
          },
      },
      offer:{
          type : Sequelize.INTEGER,
      },
      stock:{
          type : Sequelize.INTEGER,
          allowNull : false,
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
    await queryInterface.dropTable('Products');
  }
};
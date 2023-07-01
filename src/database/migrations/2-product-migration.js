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
        type : DataType.STRING(100),
        allowNull : false,
      },
      care : {
          type : DataType.TEXT,
          allowNull : true
      },
      description : {
          type : DataType.TEXT,
          allowNull : false,
      },
      price : {
          type : DataType.INTEGER,
          allowNull : false,
      },
      category_id: {
          type : DataType.INTEGER,
          references: {
            model: 'categorysproduct',
            key: 'id'
          },
      },
      offer:{
          type : DataType.INTEGER,
      },
      stock:{
          type : DataType.INTEGER,
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
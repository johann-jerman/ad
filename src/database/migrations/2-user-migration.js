'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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

      lastname : {
          type : Sequelize.STRING(100),
          allowNull : false,
      },

      password : {
          type : Sequelize.STRING(255),
          allowNull : false,
      },

      email : {
          type : Sequelize.STRING(255),
          allowNull : false,
      },
      
      image : {
          type : Sequelize.STRING(255),
          allowNull : true,
      },
      userCategory_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Usercategory',
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
    await queryInterface.dropTable('Users');
  }
};
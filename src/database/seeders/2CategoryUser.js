'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('usercategory', [
      {
        category: 'user',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        category: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /*
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

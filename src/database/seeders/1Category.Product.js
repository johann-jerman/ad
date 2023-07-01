'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('categorysproduct', [
      {
        category: 'man',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        category: 'woman',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    Example:
    */
    await queryInterface.bulkInsert('sizes', [
      {
        size: 'XS',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//1
      },
      {
        size: 'S',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//2
      },
      {
        size: 'M',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//3
      },
      {
        size: 'L',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//4
      },
      {
        size: 'XL',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//5
      },
      {
        size: 'XXL',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//6
      },
      {
        size: 'XXXL',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null//7
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
